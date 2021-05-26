import db from '../../firebase';

const getBoardGamesImage = () => {
    return db
        .collection('board-games')
        .get()
        .then(snap => snap.docs.map(docs => docs.data()));
};
export default getBoardGamesImage;
