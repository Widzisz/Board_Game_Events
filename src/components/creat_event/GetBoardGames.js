import db from '../../firebase';

const getBoardGames = () => {
    return db
        .collection('board-games')
        .get()
        .then(snap => snap.docs.map(docs => docs.data()));
};

export default getBoardGames;
