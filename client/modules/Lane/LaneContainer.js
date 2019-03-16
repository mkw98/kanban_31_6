import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLaneRequest, updateLaneRequest, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';
import * as laneActions from './LaneActions';
import { createNote } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => {
  return {
    laneNotes: ownProps.lane.notes.map(noteId => state.notes.find(note => note.id === noteId))
  };
};
const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);