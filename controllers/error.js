exports.get404page = (req, res, next) => {
    res.status(404).render('404',{pageTitle:'page Not Found',path:'/404'});
}