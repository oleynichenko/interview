// Класс пультов имеет ссылку на устройство, которым управляет.
// Методы этого класса делегируют работу методам связанного
// устройства.
class Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown() {
    this.device.setVolume(this.device.getVolume() - 10)
  }

  volumeUp() {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown() {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp() {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}

// Вы можете расширять класс пультов, не трогая код устройств.
class AdvancedRemote extends Remote {
  mute() {
   this.device.setVolume(0);
  }
}

// Все устройства имеют общий интерфейс. Поэтому с ними может
// работать любой пульт.
interface Device {
  isEnabled();
  enable();
  disable();
  getVolume();
  setVolume(percent);
  getChannel();
  setChannel(channel);
}

// Но каждое устройство имеет особую реализацию.
class Tv implements Device {
  isEnabled() {};
  enable() {};
  disable() {};
  getVolume() {};
  setVolume(percent) {};
  getChannel() {};
  setChannel(channel) {};
}

class Radio implements Device {
  isEnabled() {};
  enable() {};
  disable() {};
  getVolume() {};
  setVolume(percent) {};
  getChannel() {};
  setChannel(channel) {};
}

// Где-то в клиентском коде.
const tv = new Tv();
const remote = new Remote(tv);
remote.togglePower();

const radio = new Radio();
const remote2 = new AdvancedRemote(radio);