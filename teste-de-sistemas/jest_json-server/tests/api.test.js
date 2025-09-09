import jsonServer from "json-server";

let server;
const baseUrl = "http://localhost:4000";

beforeAll((done) => {
    const app = jsonServer.create();
    const router = jsonServer.router("db.json");
    const middlewares = jsonServer.defaults();

    app.use(middlewares);
    app.use(router);

    server = app.listen(4000, done);
});

afterAll((done) => {
    server.close(done);
});

// -----------------------------
// Exercício 1: GET básico
// -----------------------------
test("GET /users retorna 200", async () => {
    const res = await fetch(`${baseUrl}/users`);
    expect(res.status).toBe(200);
});

// -----------------------------
// Exercício 2: Retorna array
// -----------------------------
test("GET /users retorna um array", async () => {
    const res = await fetch(`${baseUrl}/users`);
    const data = await res.json();
    expect(Array.isArray(data)).toBe(true);
});

// -----------------------------
// Exercício 3: POST cria usuário
// -----------------------------
test("POST /users cria usuário", async () => {
    const novoUsuario = { name: "Ana", email: "ana@example.com" };
    const res = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
    });
    const data = await res.json();
    expect(data.name).toBe("Ana");
});

// -----------------------------
// Exercício 4: GET usuário específico
// -----------------------------
test("GET /users/2 retorna usuário válido", async () => {
    const res = await fetch(`${baseUrl}/users/2`);
    const data = await res.json();
    expect(data).toHaveProperty("id", 2);
});

// -----------------------------
// Exercício 5: PUT atualiza usuário
// -----------------------------
test("PUT /users/2 atualiza nome do usuário", async () => {
    const res = await fetch(`${baseUrl}/users/2`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: 2,
            name: "Thiago Atualizado",
            email: "thiago@example.com",
        }),
    });
    const data = await res.json();
    expect(data.name).toBe("Thiago Atualizado");
});

// -----------------------------
// Exercício 6: PATCH atualiza parcialmente
// -----------------------------
test("PATCH /users/2 atualiza email", async () => {
    const res = await fetch(`${baseUrl}/users/2`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "novoemail@example.com" }),
    });
    const data = await res.json();
    expect(data.email).toBe("novoemail@example.com");
});

// -----------------------------
// Exercício 7: DELETE usuário
// -----------------------------
test("DELETE /users/5 exclui usuário", async () => {
    await fetch(`${baseUrl}/users/5`, { method: "DELETE" });
    const res = await fetch(`${baseUrl}/users/5`);
    expect(res.status).toBe(404);
});
test("DELETE /users/6 exclui usuário", async () => {
    await fetch(`${baseUrl}/users/6`, { method: "DELETE" });
    const res = await fetch(`${baseUrl}/users/6`);
    expect(res.status).toBe(404);
});


// -----------------------------
// Exercício 8: Validação de usuário inexistente
// -----------------------------
test("GET /users/999 retorna 404", async () => {
    const res = await fetch(`${baseUrl}/users/999`);
    expect(res.status).toBe(404);
});

// -----------------------------
// Exercício 9: Lista não vazia
// -----------------------------
test("POST cria usuário e lista não está vazia", async () => {
    const novoUsuario = { name: "Carlos", email: "carlos@example.com" };
    await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoUsuario),
    });
    const res = await fetch(`${baseUrl}/users`);
    const data = await res.json();
    expect(data.length).toBeGreaterThan(0);
});

// -----------------------------
// Exercício 10: Encadeamento completo
// -----------------------------
test("Fluxo completo de usuário", async () => {
    // cria
    let res = await fetch(`${baseUrl}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: "Teste Fluxo",
            email: "fluxo@example.com",
        }),
    });
    let user = await res.json();

    // pega
    res = await fetch(`${baseUrl}/users/${user.id}`);
    let data = await res.json();
    expect(data).toHaveProperty("name", "Teste Fluxo");

    // deleta
    await fetch(`${baseUrl}/users/${user.id}`, { method: "DELETE" });
    res = await fetch(`${baseUrl}/users/${user.id}`);
    expect(res.status).toBe(404);
});