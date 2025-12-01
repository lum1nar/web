// ==================================
// Try Catch
//
function getUser(id) {
    if (!id) throw new Error("id is required");
    return id;
}
try {
    getUser();
} catch (err) {
    console.log("錯誤:", err.message);
}

console.log(
    "The program will not be blocked if we handle error with try-catch",
);
