TRUNCATE TABLE "Questions", "Answers" RESTART IDENTITY;

INSERT INTO "Questions" ("Title", "Body", "Tags") VALUES ('C#', 'What is C#?', 'C# Back-end');
INSERT INTO "Questions" ("Title", "Body", "Tags") VALUES ('ReactJS Hooks', 'What is React Hooks', 'ReactJS JavaScript Hooks');

INSERT INTO "Answers" ("QuestionId", "CreatedAt", "Body") VALUES (1, '2020-01-01 14:23:55', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi impedit quisquam sit, saepe enim placeat a vero voluptas asperiores atque laudantium in, nobis sunt blanditiis dignissimos. Deleniti, esse optio!');
INSERT INTO "Answers" ("QuestionId", "CreatedAt", "Body") VALUES (1, '2020-01-01 18:23:55', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima modi impedit quisquam sit, saepe enim placeat a vero voluptas asperiores atque laudantium in, nobis sunt blanditiis dignissimos. Deleniti, esse optio!');
