/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import Settings from "./configfile";
import {Changelog} from "../ChangelogApi/index";
const configTC = new TextComponent("&0- &e/bridge settings &aOpen the Settings menu to input info and customize").setClick("run_command", "/bridge settings").setHoverValue("&3Click to run &e/bridge settings");
const gistTC = new TextComponent("&0- &aFor a detailed explanation and guide on using the module, click this message.").setClick("open_url", "https://mistercheezecake.github.io/bridgeguide.html").setHoverValue("&3Click to see a detailed guide");
const helpTC = new TextComponent("&0- &aFor support, bug reports, or suggestions, join the Discord by clicking this.").setClick("open_url", "https://discord.gg/YH3hw926hz").setHoverValue("&3Click to join the discord");
register("command", (arg1) => {
  if (arg1 === 'config' || arg1 === 'settings') {
    Settings.openGUI()
  } else if (arg1 === undefined || arg1 === 'help') {
    ChatLib.chat('&8--------------- &f[&eUniversal&3Bridge&f] &8---------------');
    ChatLib.chat(configTC);
    ChatLib.chat(gistTC)
    ChatLib.chat(helpTC)
  }
}).setTabCompletions('settings', 'help').setName('bridge')
const colorArray = ["&4", "&c" ,"&6", "&e", "&2", "&a", "&b", "&3", "&1", "&9", "&d", "&5", "&f", "&7", "&8", "&0"];
register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot} ${*}: &r${player}" + Settings.seperator + " ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot} ${*}: &r${player}" + Settings.seperatorArray + " ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot}: &r${player}"+ Settings.seperator + " ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot}: &r${player}"+ Settings.seperatorArray + " ${msg}&r");
function bridgeChat(bot, player, msg, event) {
  if (!Settings.enabled) return;
  if (Settings.botName.toLowerCase() !== ChatLib.removeFormatting(bot).toLowerCase()) return;
  cancel(event);
  bridgeText = Settings.prefix;
  if (Settings.prefixBold === true) {bridgeBold = "&l"} else {bridgeBold = ""}
  if (Settings.userBold === true) {discordBold = "&l"} else {discordBold = ""}
  bridgeColor = colorArray[Settings.bridgeColor]
  discordColor = colorArray[Settings.userColor]
  ChatLib.chat(`§2Guild > ${bridgeColor + bridgeBold + bridgeText} ${discordColor + discordBold + player}§r: ${msg}`);
}

const cl = new Changelog('UniversalBridge', '&e1.3.0', '&aThe module now supports multiple seperators')
cl.writeChangelog()

register("command", arg1 => {
  eval(arg1)
  ChatLib.chat('&aEvaluation Completed')
}).setName("ubeval")