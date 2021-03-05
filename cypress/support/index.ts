import { createCommands } from 'msw-cypress';
import { handlers } from '../../src/mocks/handlers';

createCommands({ handlers });
