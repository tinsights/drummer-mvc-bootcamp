import db from './models/index.mjs';

// import the controller
import initDrummersController from './controllers/drummer_controller.mjs';
import initReservationsController from './controllers/reservation_controller.mjs';

export default function bindRoutes(app) {
  // pass in the db for all items callbacks
  const drummersController = initDrummersController(db);
  const reservationsController = initReservationsController(db);

  app.get('/', (req, res) => {
    console.log('Req received');
    res.send('Hello');
  });
  app.get('/drummers', drummersController.index);
  app.get('/drummer/:id', drummersController.show);
  app.get('/reservation/:id', reservationsController.show);
  app.post('/drummer/:id', reservationsController.create);
}
