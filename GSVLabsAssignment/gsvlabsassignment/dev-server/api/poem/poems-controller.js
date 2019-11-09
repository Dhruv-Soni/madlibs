import User from '../../model/user-model'
import Poem from '../../model/poem-model'
import * as auth from '../../services/auth-service';


export function index(req, res) {
    // FIND ALL POEMS
    Poem.find({}, (error, poems) => {
        if (error) {
            return res.status(500).json();
        }
        return res.status(200).json({ poems: poems });
    }).populate('author', 'username', 'user');
}

export function create(req, res) {
    // CREATE POEM
    const id = auth.getUserId(req);
    User.findOne({ _id: id }, (error, user) => {
        if (error && !user) {
            return res.status(500).json();
        }
        const poem = new Poem(req.body.poem);
        poem.author = user._id;

        poem.save(error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(201).json();
        });
    });
}

export function update(req, res) {
    // UPDATE POEM
    const id = auth.getUserId(req);

    User.findOne({ _id: id }, (error, user) => {
        if (error) {
            return res.status(500).json();
        }
        if (!user) {
            return res.status(404).json();
        }

        const poem = new Poem(req.body.poem);
        poem.author = user._id;
        Poem.findByIdAndUpdate({ _id: poem._id }, poem, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function remove(req, res) {
    // DELETE A POEM
    const id = auth.getUserId(req);
    Poem.findOne({ _id: req.params.id }, (error, poem) => {
        if (error) {
            return res.status(500).json();
        }
        if (!poem) {
            return res.status(404).json();
        }
        if (poem.author._id.toString() !== id) {
            return res.status(403).json({ message: 'Not allowed to delete another user\'s post' });
        }
        Poem.deleteOne({ _id: req.params.id }, error => {
            if (error) {
                return res.status(500).json();
            }
            return res.status(204).json();
        });
    });
}

export function show(req, res) {
    // GET POEM BY ID
    Poem.findOne({ _id: req.params.id }, (error, poem) => {
        if (error) {
            return res.status(500).json();
        }
        if (!poem) {
            return res.status(404).json();
        }
        return res.status(200).json({ poem: poem });
    });
}