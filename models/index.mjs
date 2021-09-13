import { Sequelize } from 'sequelize';
import allConfig from '../config/config.js';

import initDrummerModel from './drummer.mjs';
import initReservationModel from './reservation.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

const sequelize = new Sequelize(config);

// add your model definitions to db here
// change to required models
db.Drummer = initDrummerModel(sequelize, Sequelize.DataTypes);
db.Reservation = initReservationModel(sequelize, Sequelize.DataTypes);

db.Reservation.belongsTo(db.Drummer);
db.Drummer.hasMany(db.Reservation);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
