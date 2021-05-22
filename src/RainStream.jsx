//characters set
const VALID_CHARS = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;

const MIN_STREAM_SIZE = 15;
const MAX_STREAM_SIZE = 50;

const getRandInRange = (min, max) =>
	Math.floor(Math.random() * (max - min)) + min;

const getRandChar = () =>
	VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length));

const getRandStream = () =>
	new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE))
		.fill().map(_ => getRandChar());

const RainStream = () => {
    return (
        <div
            style = {{
                fontFamily: 'matrixFont',
                color: '#20c20e',
                writingMode: 'vertical-rl',
                textOrientation: 'upright',
                whiteSpace: 'nowrap',
                userSelect: 'none',
                textShadow: '0px 0px 8px rgbs(32, 194, 14, 0.8)',
                fontSize: 20,
            }}>
                {getRandStream().map(char =>(
                    <a
                        style={{margin: -12,}}>
                            {char}
                        </a>
                        ))}
        </div>
    );
};

export default RainStream;