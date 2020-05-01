import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import * as io from "socket.io-client";
import { InfogameService } from "./infogame.service";

@Injectable({
  providedIn: "root",
})
export class SocketioService {
  socket;
  initialDataToGame;
  constructor(private gameInfo: InfogameService) {}

  // Confirma que la conexión esta funcionando
  setupSocketConnection(msg) {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      query: {
        token: msg,
      },
    });
    this.socket.emit("myMessage", this.socket.query.token);

    this.socket.on("my broadcast", (data: string) => {
      console.log(data);
    });
  }

  /**
   * myGameConnection
   * Une un jugador a una mesa disponible
   * @param msg Información
   */

  async myGameConnection(msg) {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      query: {
        token: msg,
      },
    });
    this.socket.emit("myConnectionGame", `${this.socket.query.token}`);
    let resultConnection = await this.getDataToServer(this.socket);
    console.log(resultConnection);
  }

  /**
   * createInitialData
   * Crea datos ficticios para iniciar la aplicación
   * @param initialInfo
   */
  createInitialData(initialInfo) {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      query: {
        token: initialInfo,
      },
    });

    let result = this.socket.emit("adminData", initialInfo);
    // console.log(`Resultado desde el server: ${result}`);
  }

  /**
   * getInitialData
   * Obtiene la información inicial del juego
   * - Jugadores conectados
   * - Mesas disponibles
   * - Categorias de juego
   * - Palabras a buscar
   */
  async getInitialData() {
    // abrir el socket de comunicacion
    this.socket = io(environment.SOCKET_ENDPOINT);
    // llamar al metodo en el servidor
    this.socket.emit("getAdminData");
    // recibir la información desde el servidor (Validar que la info ya este disponible)
    this.initialDataToGame = await this.getDataToServer(this.socket);
    // console.log("socketio: " + this.initialDataToGame);
    return this.initialDataToGame;
  }

  async getConnectionData() {
    this.socket = io(environment.SOCKET_ENDPOINT);

    this.socket.emit("getConnectionData");

    console.log(await this.getDataToServer(this.socket));
  }

  getDataToServer(socket) {
    return new Promise(function (resolve, reject) {
      try {
        socket.on("my broadcast", (data: string) => {
          resolve(data);
        });
      } catch (error) {
        reject("Problema con los datos del server " + error);
      }
    });
  }
}
