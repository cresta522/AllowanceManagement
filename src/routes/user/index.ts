import * as Express from 'express';
import noImpl from '../../noImpl';

const router = Express.Router();

// ユーザー新規作成
router.post('/new', noImpl);

// ユーザ情報の取得
router.get('/:user', noImpl);

// ユーザ情報の更新
router.put('/update', noImpl);

// ユーザの削除
router.delete('/:user', noImpl);

export default router;