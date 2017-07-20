import { MainServer } from './MainServer';
import { GameSystem } from './GameSystem';

const server = new MainServer();
server.listen(2000);

const system = new GameSystem(server);
system.launch();
