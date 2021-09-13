export default function initDrummersController(db) {
  const index = (req, res) => {
    db.Drummer.findAll()
      .then((drummers) => {
        console.log('drummers :>> ', drummers);
        res.render('drummers', { drummers });
      })
      .catch((error) => console.log(error));
  };
  const show = (req, res) => {
    db.Drummer.findOne({
      where: {
        id: req.params.id,
      },
    }).then((drummer) => {
      drummer.getReservations()
        .then((reservations) => {
          console.log('reservations :>> ', reservations);
          res.render('drummer', { reservations, drummer });
        });
    })
      .catch((error) => console.log(error));
  };

  return {
    index,
    show,
  };
}
