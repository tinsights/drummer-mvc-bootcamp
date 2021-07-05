import db from './models/index.mjs';

// import your controllers here
import initDrummersController from './controllers/drummers.mjs';
import initReservationsController from './controllers/reservations.mjs';

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks

  // define your route matchers here using app
  const DrummersController = initDrummersController(db);
  const ReservationsController = initReservationsController(db);

  app.get('/drummer/:id', DrummersController.oneDrummer);
  app.post('/reservation/:drummer_id', ReservationsController.reservationPost);
  app.get('/reservations/:drummer_id', ReservationsController.drummersReservations);
  app.get('/', DrummersController.allDrummers);
}
