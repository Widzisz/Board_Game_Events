import db from '../../firebase';

const getBoardGames = () => {
    return db
        .collection('board-games')
        .get()
        .then(snap =>
            snap.docs.map(doc => {
                return { ...doc.data(), _doc: doc };
            }),
        );
};

export default getBoardGames;
