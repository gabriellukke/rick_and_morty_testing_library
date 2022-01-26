import { render, screen, waitForElementToBeRemoved, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from '../App';

describe('Testa a aplicação Rick and Morty', () => {
  it('se os links de cabaçalho estão corretos', () => {
    render(<App />);

    const linkCharacters = screen.getByRole('link', { name: 'Personagens'});
    expect(linkCharacters).toBeInTheDocument();

    const linkLocations = screen.getByRole('link', { name: 'Locais'});
    expect(linkLocations).toBeInTheDocument();

    const linkEpisodes = screen.getByRole('link', { name: 'Episódios'});
    expect(linkEpisodes).toBeInTheDocument();
  });

  it('se os personagens são renderizados na página de `/characters`', async () => {
    render(<App />);

    const linkCharacters = screen.getByRole('link', { name: 'Personagens'});
    userEvent.click(linkCharacters);

    const loadingElement = screen.getByText(/Carregando.../);
    expect(loadingElement).toBeInTheDocument();  
    
    await waitForElementToBeRemoved(loadingElement, { timeout: 2000});

    const allCards = screen.getAllByRole('listitem');

    expect(allCards.length).toBe(20);
  });

  it('se o `Card` do personagem é renderizado corretamente', async () => {
    render(<App />);

    const linkCharacters = screen.getByRole('link', { name: 'Personagens'});
    userEvent.click(linkCharacters);

    const loadingElement = screen.getByText(/Carregando.../);
    expect(loadingElement).toBeInTheDocument();  
    
    await waitForElementToBeRemoved(loadingElement, { timeout: 2000});

    const card = screen.getAllByRole('listitem')[0];

    const nameCharacter = screen.getAllByRole('heading', { level: 3})[0];
    expect(nameCharacter).toHaveTextContent(/Rick Sanchez/);

    const img = screen.getAllByRole('img')[0];
    expect(img).toHaveAttribute('src', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg');
    
    expect(card).toContainElement(img);
    expect(card).toContainElement(nameCharacter);    
  });

  it('se a funcionalidade de `Ver mais` está funcionando', async () => {
    render(<App />);

    const linkCharacters = screen.getByRole('link', { name: 'Personagens'});
    userEvent.click(linkCharacters);

    const loadingElement = screen.getByText(/Carregando.../);
    expect(loadingElement).toBeInTheDocument();  
    
    // await waitForElementToBeRemoved(loadingElement, { timeout: 2000});

    const allCards = await screen.findAllByRole('listitem', {}, { timeout: 2000});
    expect(allCards[0]).toBeInTheDocument();

    const buttonSeeMore = screen.getAllByRole('button', { name: 'Ver mais'})[0];
    expect(buttonSeeMore).toBeInTheDocument();
    userEvent.click(buttonSeeMore);

    await waitFor(() => screen.getByText(/Rick Sanchez/) , { timeout: 2000});

    const genderCharacter = screen.getByText(/Male/);
    expect(genderCharacter).toBeInTheDocument();

    const locationCharacter = screen.getByText(/Citadel of Ricks/);
    expect(locationCharacter).toBeInTheDocument();   
  });

});
