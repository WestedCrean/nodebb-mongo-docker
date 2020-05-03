try {
    let res = [
        'use nodebb-pl',
        db.createUser({user: 'nodebb-pl', pwd: '$NODEBB_PL_PASS', roles: [{role: 'readWrite', db: 'nodebb-pl'}]}),
        db.createUser({user: 'nodebb-en', pwd: '$NODEBB_EN_PASS', roles: [{role: 'readWrite', db: 'nodebb-en'}]}),
        db.createUser({user: 'nodebb-private', pwd: '$NODEBB_PRIVATE_PASS', roles: [{role: 'readWrite', db: 'nodebb-private'}]})
      ]
} catch(error) {
    print(error)
    print('Error, exiting')
    quit(1)
}

