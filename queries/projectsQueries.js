const projectQueries = {
  getAllProjects: `
    SELECT u.photo, u.firstname, u.lastname, u.bootcamp, u.curse,
    p.title, p.date, p.type, p.description, p.achievement_one, p.achievement_two, p.achievement_three, 
    p.finished, p.pending_one, p.pending_two, p.pending_three, p.img_small, p.img_big, p.github, p.site
    FROM projects AS p
    JOIN users AS u
    ON u.user_id = p.user_id`,
};

module.exports = projectQueries;
