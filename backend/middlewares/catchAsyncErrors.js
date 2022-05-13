

module.exports = (errorfunc) => (req, res, next) => {
    Promise.resolve(errorfunc(req, res, next)).catch(next);
}