import PropTypes from 'prop-types';
import React from 'react';
import PDFView from './PDFView';

class Detail extends React.Component {
  static propTypes = {
    file: PropTypes.shape({
      key: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
      url: PropTypes.string,
    }).isRequired,
    close: PropTypes.func,
  };

  handleCloseClick = (event) => {
    if (event) {
      event.preventDefault();
    }
    this.props.close();
  };

  render() {
    let name = this.props.file.key.split('/');
    name = name.length ? name[name.length - 1] : '';

    return (
      <div>
        <h2>File Details</h2>
        <dl>
          <dt>ID</dt>
          <dd>{JSON.stringify(this.props)}</dd>

          <dt>Key</dt>
          <dd>{this.props.file.key}</dd>

          <dt>Name</dt>
          <dd>{name}</dd>
        </dl>
        <PDFView url={this.props.file.id} />
        <button onClick={this.handleCloseClick}>Close</button>
      </div>
    );
  }
}

export default Detail;
