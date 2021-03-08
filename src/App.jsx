import Card from './components/Card';

function App() {
  return (
    <div className='container'>
      <h1>Propiedades de los componentes</h1>
      <hr />
      <div className="row">
        <div className="col">
          <Card
            imagen='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/19aba07b-a5c4-4640-9f83-74eb48210fd5/d1sniyz-a453cd07-2682-4183-ba33-a3b0e0654777.gif'
            titulo='Titulo Card 1'
            texto='Texto de la card 1'
          />
        </div>
        <div className="col">
          <Card
            imagen='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/19aba07b-a5c4-4640-9f83-74eb48210fd5/d1sniyz-a453cd07-2682-4183-ba33-a3b0e0654777.gif'
            titulo='Titulo Card 2'
            texto='Texto de la card 2'
          />
        </div>
        <div className="col">
          <Card
            imagen='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/19aba07b-a5c4-4640-9f83-74eb48210fd5/d1sniyz-a453cd07-2682-4183-ba33-a3b0e0654777.gif'
            titulo='Titulo Card 3'
            texto='Texto de la card 3'
          />
        </div>
      </div>

    </div>
  );
}

export default App;
