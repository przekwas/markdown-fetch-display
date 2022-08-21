import * as express from 'express';
import * as path from 'path';

const router = express.Router();

const changelogPath = path.join(__dirname, '../changelog.md');
router.get('/api/changelog', (req, res, next) => {
	res.sendFile(changelogPath);
});

export default router;
