export default function initDrummersController(db) {
  const show = (req, res) => {
    db.Reservation.findAll({
      where: {
        drummer_id: req.params.id,
      },
    })
      .then((reservation) => {
        res.render('reservation', { reservation });
      })
      .catch((error) => console.log(error));
  };

  const create = (req, res) => {
    console.log('req.params.id :>> ', req.params.id);
    const drummerId = req.params.id;
    db.Reservation.create({
      date: req.body.reservation_date,
      drummerId,
    })
      .then((reservation) => {
        res.redirect(`/drummer/${drummerId}`);
      })
      .catch((error) => console.log(error));
  };

  return {
    show,
    create,
  };
}
