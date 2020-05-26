import React from 'react';
import ClassNames from 'classnames';

import { BaseFile } from 'react-keyed-file-browser';

class RawTableFile extends BaseFile {
  render() {
    const {
      isDragging,
      isDeleting,
      isRenaming,
      isOver,
      isSelected,
      action,
      url,
      browserProps,
      connectDragPreview,
      depth,
      // get other file props here
    } = this.props;

    const icon =
      browserProps.icons[this.getFileType()] ||
      browserProps.icons.File;
    const inAction = isDragging || action;

    const ConfirmDeletionRenderer =
      browserProps.confirmDeletionRenderer;

    let name;
    if (
      !inAction &&
      isDeleting &&
      browserProps.selection.length === 1
    ) {
      name = (
        <ConfirmDeletionRenderer
          handleDeleteSubmit={this.handleDeleteSubmit}
          handleFileClick={this.handleFileClick}
          url={url}
        >
          {icon}
          {this.getName()}
        </ConfirmDeletionRenderer>
      );
    } else if (!inAction && isRenaming) {
      name = (
        <form className="renaming" onSubmit={this.handleRenameSubmit}>
          {icon}
          <input
            ref={(el) => {
              this.newNameRef = el;
            }}
            type="text"
            value={this.state.newName}
            onChange={this.handleNewNameChange}
            onBlur={this.handleCancelEdit}
            autoFocus
          />
        </form>
      );
    } else {
      name = (
        <span
          href={url || '#'}
          download="download"
          onClick={this.handleFileClick}
        >
          {icon}
          {this.getName()}
        </span>
      );
    }

    let draggable = <div>{name}</div>;
    if (typeof browserProps.moveFile === 'function') {
      draggable = connectDragPreview(draggable);
    }

    const row = (
      <tr
        className={ClassNames('file', {
          pending: action,
          dragging: isDragging,
          dragover: isOver,
          selected: isSelected,
        })}
        onClick={this.handleItemClick}
        onDoubleClick={this.handleItemDoubleClick}
      >
        <td className="name">
          <div style={{ paddingLeft: depth * 16 + 'px' }}>
            {draggable}
          </div>
        </td>
      </tr>
    );

    return this.connectDND(row);
  }
}
class TableFile extends RawTableFile {}

export default TableFile;
export { RawTableFile };
