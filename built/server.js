"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var food_router_1 = __importDefault(require("./routers/food.router"));
var user_router_1 = __importDefault(require("./routers/user.router"));
var database_config_1 = require("./configs/database.config");
var order_router_1 = __importDefault(require("./routers/order.router"));
var path_1 = __importDefault(require("path"));
(0, database_config_1.dbConnect)();
var app = (0, express_1.default)();
app.use(express_1.default.json());
//app.get('/*', express.static('../../frontend/dist/frontend/browser'));
//app.use(express.static(path.resolve('../../frontend/dist/frontend/browser')));
// Catch-all route to serve index.html for Angular routes
//app.use(express.static(path.resolve('../../frontend/dist/frontend/browser')));
// Serve static files from the Angular app
app.use(express_1.default.static(path_1.default.join(__dirname, '../../frontend/dist/frontend/browser')));
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use("/api/foods", food_router_1.default);
app.use("/api/users", user_router_1.default);
app.use("/api/orders", order_router_1.default);
app.get('*', function (req, res) {
    res.sendFile(path_1.default.join(__dirname, '../../frontend/dist/frontend/browser/index.html'));
});
var port = 5000;
app.listen(port, function () {
    console.log("WebSite Served On http://localhost:" + port);
});
