import { css } from 'emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import CanvasItem from '../CanvasItem';

const canvasStyles = css({
  overflow: 'auto',
  padding: '8px',
  flex: '1',
});

const titleStyles = css({
  padding: '8px',
});

class Canvas extends React.Component {
  static propTypes = {
    ids: PropTypes.array.isRequired,
  };

  render() {
    return (
      <div className={canvasStyles}>
        <h3 className={titleStyles}>Email</h3>
        <Droppable droppableId='droppable-1'>
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.ids.map((id, index) => <CanvasItem key={id} id={id} index={index}/>)}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    )
  }
}

export default Canvas;
