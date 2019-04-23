import * as Express from 'express';
import noImpl from '../../noImpl';

const router = Express.Router();

// ログイン
router.post('/login', noImpl);

// ログアウト
router.delete('/logout', noImpl);

export default router;