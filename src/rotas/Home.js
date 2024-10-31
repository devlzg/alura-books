import Pesquisa from '../components/Pesquisa';
import UltimosLancamentos from '../components/UltimosLancamentos';
import AppContainer from '../components/AppContainer';

function Home() {
	return (
		<AppContainer>
			<Pesquisa/>
			<UltimosLancamentos/>
    	</AppContainer>
  	);
}

export default Home;
