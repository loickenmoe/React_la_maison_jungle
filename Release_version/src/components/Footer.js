import { useEffect, useState } from 'react'
import '../styles/footer.css'
// import cart from './Cart';

function Footer() {
	// const [cart, updateCart] = useState([])
	const [inputValue, setInputValue] = useState('')

	// Quelques cas d'utilisation de useEffect
	
	// useEffect(() =>{
	// 	console.log(`1 cette alerte s'affiche à chaque render`);
	// })
	// useEffect(() =>{
	// 	console.log(`2 cette alerte s'affiche au premier render`);
	// }, [])

	// useEffect(() =>{
	// 	console.log(`3 cette alerte s'affiche au premier rendu du composant , mais egalement lorsque le composant cart sera mis a jours`);
	// }, [Cart])

	useEffect(() => {
		return () =>
		console.log(`4 cette alerte declanche un effet quand l'élement est retiré du DOM `);
	})

	function handleInput(e) {
		setInputValue(e.target.value)
	}

	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer