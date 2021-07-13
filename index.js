// I am sorry for the code mess, CT reviewer
/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import Settings from "./configfile";
import {Changelog} from "../ChangelogApi/index";
import FileUtilities from '../FileUtilities/main'
const configTC = new TextComponent("&0- &e/bridge settings &aOpen the Settings menu to input info and customize").setClick("run_command", "/bridge settings").setHoverValue("&3Click to run &e/bridge settings");
const ignoreTC = new TextComponent("&0- &e/bridge ignore &aPrint the help message for bridge ignoring").setClick("run_command", "/bridge ignore help").setHoverValue("&3Click to run &e/bridge ignore help");
const gistTC = new TextComponent("&0- &aFor a detailed explanation and guide on using the module, click this message.").setClick("open_url", "https://mistercheezecake.github.io/bridgeguide.html").setHoverValue("&3Click to see a detailed guide");
const helpTC = new TextComponent("&0- &aFor support, bug reports, or suggestions, join the Discord by clicking this.").setClick("open_url", "https://discord.gg/YH3hw926hz").setHoverValue("&3Click to join the discord");
const createConditionaly = (name, contents) => {
  if (FileUtilities.exists(`./config/ChatTriggers/modules/UniversalBridge/${name}`)) return 1;
  FileLib.write(`./config/ChatTriggers/modules/UniversalBridge/${name}`, contents)
  return 1;
}
const validateDataJson = () => {
  let dataJson = FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json')
  try {
    JSON.parse(dataJson);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
const jsonifiedTemplate = JSON.stringify(
  {
    ignore: []
  }
)
// Thanks to the source of all knowlage, stackoverflow, for this very function
// https://stackoverflow.com/a/5767357/16264599
function removeItemOnce(arr, value) {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}
createConditionaly('data.json', jsonifiedTemplate)
register("command", (arg1, arg2, arg3, arg4) => {
  if (arg1 === 'config' || arg1 === 'settings') {
    Settings.openGUI()
  } else if (arg1 === undefined || arg1 === 'help') {
    ChatLib.chat('&8--------------- &f[&eUniversal&3Bridge&f] &8---------------');
    ChatLib.chat(configTC);
    ChatLib.chat(ignoreTC);
    ChatLib.chat(gistTC);
    ChatLib.chat(helpTC);
  } else if (arg1 === 'ignore') {
    if (arg2 === undefined || arg2 == 'help')  {
    ChatLib.chat("&aUniversalBridge Ignore commands:");
    ChatLib.chat("&e/bridge ignore help &7- &bPrints this help message");
    ChatLib.chat("&e/bridge ignore list (page) &7- &bList ignored players");
    ChatLib.chat("&e/bridge ignore add Player &7- &bIgnore a player");
    ChatLib.chat("&e/bridge ignore remove Player &7- &bUnignore a player");
    // Yes this is almost exactly the hypxiel menu
    } else if (arg2 === 'add') {
      let currentList = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
      if (currentList.ignore.includes(arg3.toLocaleLowerCase())) {
        ChatLib.chat("&cYou've already ignored that player! &b/ignore remove Player &cto unignore them!")
        return;
      }
      if (currentList.ignore.length >= 49) {
        ChatLib.chat('&cFor performance reasons, you can ignore a maximum of 50 players. You have reached the limit')
        return;
      }
      currentList.ignore.push(arg3.toLowerCase())
      FileLib.write('./config/ChatTriggers/modules/UniversalBridge/data.json', JSON.stringify(currentList));
      data = currentList
      ChatLib.chat(`&aAdded ${arg3} to your bridge ignore list`)
    } else if (arg2 === 'remove') {
      let currentList = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
      if (!currentList.ignore.includes(arg3.toLowerCase())) {
        ChatLib.chat("&cYou aren't ignoring that player! &b/ignore add Player &cto ignore!")
        return;
      }
      let newarr = removeItemOnce(currentList.ignore, arg3.toLowerCase())
      let newlistJSON = JSON.stringify({
        ignore: newarr
      })
      FileLib.write('./config/ChatTriggers/modules/UniversalBridge/data.json', newlistJSON)
      data = {
        ignore: newarr
      }
      ChatLib.chat(`&aRemoved ${arg3} from your bridge ignore list`)
    } else if (arg2 === 'list') {
      if (arg3 === '1' || arg3 === undefined) {
      let objectifiedData = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
      let list = objectifiedData.ignore
      ChatLib.chat(`&e------ UniversalBridge Ignored Users (Page 1 of ${Math.ceil(list.length / 10)})`)
      for (let i = 0; i < list.length; i++) {
        if (i > 9) return;
        ChatLib.chat(`&b${i+1}. &e${list[i]}`)
      }
    } else if (arg3 === '2') {
      let objectifiedData = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
      let list = objectifiedData.ignore
      ChatLib.chat(`&e------ UniversalBridge Ignored Users (Page 2 of ${Math.ceil(list.length / 10)})`)
      for (let i = 10; i < list.length; i++) {
        if (i > 19) return;
        ChatLib.chat(`&b${i+1}. &e${list[i]}`)
      }
    } else if (arg3 === '3') {
      let objectifiedData = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
      let list = objectifiedData.ignore
      ChatLib.chat(`&e------ UniversalBridge Ignored Users (Page 3 of ${Math.ceil(list.length / 10)})`)
      for (let i = 20; i < list.length; i++) {
        if (i > 29) return;
        ChatLib.chat(`&b${i+1}. &e${list[i]}`)
      }
    } else if (arg3 === '4') {
      let objectifiedData = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
      let list = objectifiedData.ignore
      ChatLib.chat(`&e------ UniversalBridge Ignored Users (Page 4 of ${Math.ceil(list.length / 10)})`)
      for (let i = 30; i < list.length; i++) {
        if (i > 39) return;
        ChatLib.chat(`&b${i+1}. &e${list[i]}`)
      }
    } else if (arg3 === '5' ) {
      let objectifiedData = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
      let list = objectifiedData.ignore
      ChatLib.chat(`&e------ UniversalBridge Ignored Users (Page 5 of ${Math.ceil(list.length / 10)})`)
      for (let i = 40; i < list.length; i++) {
        if (i > 49) return;
        ChatLib.chat(`&b${i+1}. &e${list[i]}`)
      }
    }
  }
  }
}).setTabCompletions('settings', 'help', 'ignore').setName('bridge')
const colorArray = ["&4", "&c" ,"&6", "&e", "&2", "&a", "&b", "&3", "&1", "&9", "&d", "&5", "&f", "&7", "&8", "&0"];
register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot} ${*}: &r${player}" + Settings.seperator + " ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot} ${*}: &r${player}" + Settings.seperator + " ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot}: &r${player}"+ Settings.seperator + " ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot}: &r${player}"+ Settings.seperator + " ${msg}&r");
function bridgeChat(bot, player, msg, event) {
  if (!Settings.enabled) return;
  if (Settings.botName.toLowerCase() !== ChatLib.removeFormatting(bot).toLowerCase()) return;
  cancel(event);
  let data = JSON.parse(FileLib.read('./config/ChatTriggers/modules/UniversalBridge/data.json'))
  if (data.ignore.includes(player.toLowerCase())) return;
  bridgeText = Settings.prefix;
  if (Settings.prefixBold === true) {bridgeBold = "&l"} else {bridgeBold = ""}
  if (Settings.userBold === true) {discordBold = "&l"} else {discordBold = ""}
  bridgeColor = colorArray[Settings.bridgeColor]
  discordColor = colorArray[Settings.userColor]
  ChatLib.chat(`§2Guild > ${bridgeColor + bridgeBold + bridgeText} ${discordColor + discordBold + player}§r: ${msg}`);
}

const cl = new Changelog('UniversalBridge', '&e1.4.0', '&aAdded an ignore feature. &e/bridge ignore &afor more details')
cl.writeChangelog()