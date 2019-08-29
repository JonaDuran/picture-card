import PictureCard from '../components/PictureCard';

const data = [
    { 
        name: 'A Hotel Name',
        description: 'This is the description of a hotel somewhere incredible to have the best vacation. Book now and get a great discount.',
        images: [
            'https://cdn.pixabay.com/photo/2016/06/10/01/05/hotel-room-1447201__340.jpg?6',
            'https://cdn.pixabay.com/photo/2017/03/09/06/30/pool-2128578__340.jpg?6',
            'https://cdn.pixabay.com/photo/2019/05/28/00/15/indoors-4234071__340.jpg?6',
        ],
    },
    { 
        name: 'Another Hotel',
        description: 'This is the description of another hotel somewhere incredible to have the best vacation. Book now and get a great discount.',
        images: [
            'https://cdn.pixabay.com/photo/2016/10/13/09/06/travel-1737168__340.jpg',
            'https://cdn.pixabay.com/photo/2014/05/18/19/15/walkway-347319__340.jpg',
            'https://cdn.pixabay.com/photo/2013/07/19/00/18/water-165219__340.jpg',
        ],
    },
];

function Index() {
    return (
        <div className="container">
            { data.map((item, i) => 
                <div className="item" key={i}>
                    <PictureCard {...item} />
                </div>
            ) }
            <style jsx global>{`
                body {
                    background: #EEE;
                }
                .container {
                    font-family: sans-serif;
                    margin: 2em auto;
                    display: flex;
                    justify-content: center;
                }
                .item {
                    margin: 1em;
                }
            `}</style>
        </div>
    );
}

export default Index;