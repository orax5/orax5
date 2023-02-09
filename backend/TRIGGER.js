// DELIMITER //
//     CREATE TRIGGER fundingOpen(트리거 명)
//         AFTER UPDATE
//             ON shinchunghada FOR EACH ROW
//         BEGIN
//             IF NewLineKind.shin_ispermit == 2
//             THEN
//             INSERT funding SET