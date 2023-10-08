const selectQuery = `
    SELECT u.photo, u.firstname, u.lastname, u.bootcamp, u.curse,
    p.title, p.date, p.type, p.description, p.achievement_one, p.achievement_two, p.achievement_three, 
    p.finished, p.pending_one, p.pending_two, p.pending_three, p.img_small, p.img_big, p.github, p.site
    FROM projects AS p
    JOIN users AS u
    ON u.user_id = p.user_id`;

const projectQueries = {
  getAllProjects: selectQuery,
  getProjectById: `
    ${selectQuery}
    WHERE p.project_id = $1`,
  getProjectByUser: `
    ${selectQuery}
    WHERE u.user_id = $1`,
  createProject: `
    INSERT INTO public.projects(
    user_id, title, date, type, description, 
    achievement_one, achievement_two, achievement_three, finished, 
    pending_one, pending_two, pending_three, img_small, img_big, github, site)
    VALUES (
        $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16
    )`,
};

module.exports = projectQueries;
