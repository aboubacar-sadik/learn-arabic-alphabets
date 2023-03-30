import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

const isolatedAlphabets = [
	'أ',
	'ب',
	'ت',
	'ث',
	'ج',
	'ح',
	'خ',
	'د',
	'ذ',
	'ر',
	'ز',
	'س',
	'ش',
	'ص',
	'ض',
	'ط',
	'ظ',
	'ع',
	'غ',
	'ف',
	'ق',
	'ك',
	'ل',
	'م',
	'هـ',
	'و',
	'ي',
];
const initialAlphabets = [
	'ا',
	'بـ',
	'تـ',
	'ثـ',
	'جـ',
	'حـ',
	'خـ',
	'د',
	'ذ',
	'ر',
	'ز',
	'سـ',
	'شـ',
	'صـ',
	'ضـ',
	'طـ',
	'ظـ',
	'عـ',
	'غـ',
	'فـ',
	'قـ',
	'كـ',
	'لـ',
	'مـ',
	'و',
	'يـ',
];
const medialAlphabets = [
	'ـأـ',
	'ـبـ',
	'ـتـ',
	'ـثـ',
	'ـجـ',
	'ـحـ',
	'ـخـ',
	'ـدـ',
	'ـذـ',
	'ـرـ',
	'ـزـ',
	'ـسـ',
	'ـشـ',
	'ـصـ',
	'ـضـ',
	'ـطـ',
	'ـظـ',
	'ـعـ',
	'ـغـ',
	'ـفـ',
	'ـقـ',
	'ـكـ',
	'ـلـ',
	'ـمـ',
	'ـوـ',
	'ـيـ',
];

const finalAlphabets = [
	'ـأ',
	'ـب',
	'ـت',
	'ـث',
	'ـج',
	'ـح',
	'ـخ',
	'ـد',
	'ـذ',
	'ـر',
	'ـز',
	'ـس',
	'ـش',
	'ـص',
	'ـض',
	'ـط',
	'ـظ',
	'ـع',
	'ـغ',
	'ـف',
	'ـق',
	'ـك',
	'ـل',
	'ـم',
	'ـو',
	'ـي',
];

function Home() {
	return (
		<div className="home_message_group">
			<h1>Arabic Alphabets Simple Quiz Test!</h1>
			<div>
				<p>
					Welcome to our Arabic Alphabets Training website, designed to help you test what you
					have learn and master the Arabic alphabets.
				</p>
				<br />
				<p>
					The navigation menu will guide you to the different pages of the website, where you
					can choose to focus on the isolated, initial, medial, or final form alphabets. You
					can use the "Randomize" button to generate a random alphabet for you to identify, or
					use the "Reset" button to start over.
				</p>
				<br />
				<p> Hope that you will find the training helpful. </p>
				<br />
				<p>
					If you have any suggestions or feedback, that can help improving the website, please
					feel free to send a message to
					<Link
						className="email"
						to="javascript:void(0)"
						onClick={() => (window.location = 'mailto:olimbamari@gmail.com')}
					>
						olimbamari@gmail.com.
					</Link>
					Your input will be considered and appreciated.
				</p>
			</div>
		</div>
	);
}

function QuizPage({ alphabets }) {
	const [currentAlphabet, setCurrentAlphabet] = useState('');
	const location = useLocation();
	const pathname = location.pathname;

	let message;

	switch (pathname) {
		case '/':
			message = 'Welcome';
			break;
		case '/isolated':
			message = 'Isolated Alphabets';
			break;
		case '/initial':
			message = 'Initial Alphabets';
			break;
		case '/medial':
			message = 'Medial Alphabets';
			break;
		case '/final':
			message = 'Final Alphabets';
			break;
		default:
			message = '';
	}

	function getRandomAlphabet() {
		const randomIndex = Math.floor(Math.random() * alphabets.length);
		return alphabets[randomIndex];
	}

	function handleRandomize() {
		setCurrentAlphabet(getRandomAlphabet());
	}

	function handleReset() {
		setCurrentAlphabet('');
	}

	return (
		<div className="training_content">
			<h1>{message}</h1>
			{currentAlphabet !== '' ? (
				<p className="alphabets">{currentAlphabet}</p>
			) : (
				<p className="start_message">Click "Randomize" to begin the quiz!</p>
			)}
			{alphabets.length === 0 && currentAlphabet !== '' && (
				<p className="end_message">You've reached the end of the quiz!</p>
			)}
			{alphabets.length > 0 && (
				<div className="btns_group">
					<button onClick={handleRandomize}>Randomize</button>
					<button onClick={handleReset}>Reset</button>
				</div>
			)}
		</div>
	);
}

function App() {
	return (
		<Router>
			<div className="container">
				<nav>
					<ul className="nav_links">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/isolated">Isolated</Link>
						</li>
						<li>
							<Link to="/initial">Initial</Link>
						</li>
						<li>
							<Link to="/medial">Medial</Link>
						</li>
						<li>
							<Link to="/final">Final</Link>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/isolated" element={<QuizPage alphabets={isolatedAlphabets} />} />
					<Route path="/initial" element={<QuizPage alphabets={initialAlphabets} />} />
					<Route path="/medial" element={<QuizPage alphabets={medialAlphabets} />} />
					<Route path="/final" element={<QuizPage alphabets={finalAlphabets} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
