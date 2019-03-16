import { connect } from 'react-redux';
import Lane from './Lane';
import { deleteLaneRequest, updateLaneRequest, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';
import { createLaneRequest, fetchLanes } from '../Lane/LaneActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  ...laneActions,
  addNote: createNote,
  createLane: createLaneRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);