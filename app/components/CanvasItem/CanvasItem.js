import { css } from 'emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

const getStyles = (isDragging) => css({
  border: isDragging ? '1px dashed lightgrey' : '1px solid lightgrey',
  borderRadius: '2px',
  padding: '16px',
  marginBottom: '1px',
});

export default class CanvasItem extends React.Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    onClick: () => {},
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.props.onChange({
      content: e.target.value,
      id: this.props.item.id,
    });
  }

  render() {
    const { index, item } = this.props;
    return (
      <Draggable draggableId={item.id} index={index}>
        {(provided, snapshot) => (
          <div
            className={getStyles(snapshot.isDragging)}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <input className={css({
                padding: '8px',
              })} type="text" name="test" onChange={this.handleChange} value={item.content}/>
          </div>
        )}
      </Draggable>
    );
  }
}
