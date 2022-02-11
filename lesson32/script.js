let c = {
    one: 452,
    "two": false,
    "name surname": "Kaium Amanbaev",
    myArray: ["hello", "world", true],
    another: {
        7: 8,
        "test": true,
        blabla: null,
        hi: [
            52,
            73,
            {
                foo: "bar",
                "hello": [
                    [62, 24, 52],
                    [62, 24, 52],
                    [62, 0, 52]
                ]
            }
        ]
    }
};

console.log(c.another.hi[2]["hello"][2][1]);
