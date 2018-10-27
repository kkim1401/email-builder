// @flow
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-beautiful-dnd';

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  static propTypes = {
    onReorderItem: PropTypes.func.isRequired,
  }

  onDragStart = () => {};

  onDragUpdate = () => {};

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    this.props.onReorderItem({
      id: draggableId,
      index: destination.index
    });
  };

  render() {
    const { children } = this.props;
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}
      >
        {children}
      </DragDropContext>
    );
  }
}
