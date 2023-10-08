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
  updateProject: `
    UPDATE projects
    SET title = $1,
        date = $2,
        type = $3,
        description = $4,
        achievement_one = $5,
        achievement_two = $6,
        achievement_three = $7,
        finished = $8,
        pending_one = $9,
        pending_two = $10,
        pending_three = $11,
        img_small = $12,
        img_big = $13,
        github = $14,
        site = $15
    WHERE project_id = $16`,
  updateProject2: `
    UPDATE projects
    SET title = 'Probando updateProject',
        date = 'Probando updateProject',
        type = 'Probando updateProject',
        description = 'Probando updateProject',
        achievement_one = 'Probando updateProject',
        achievement_two = 'Probando updateProject',
        achievement_three = 'Probando updateProject',
        finished = 'false',
        pending_one = 'Probando updateProject',
        pending_two = 'Probando updateProject',
        pending_three = 'Probando updateProject',
        img_small = 'Probando updateProject',
        img_big = 'Probando updateProject',
        github = 'Probando updateProject',
        site = 'Probando updateProject'
    WHERE project_id = 14`,
    deleteProject: `
    DELETE FROM projects
    WHERE project_id = $1`
};

module.exports = projectQueries;
