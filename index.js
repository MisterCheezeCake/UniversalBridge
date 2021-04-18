/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />
import Settings from "./configfile";
// Yes i'm using SettingsManager and Vigilance at the same time, vigilance selectors are weird.
import { Setting, SettingsObject } from "../SettingsManager/SettingsManager";
const settings = new SettingsObject("UniversalBridge",
  [
    {
      name: "Color Settings",
      settings: [
        new Setting.StringSelector("Bridge Color", 0, [
          "&4Dark Red",
          "&cRed",
          "&6Gold",
          "&eYellow",
          "&2Dark Green",
          "&aGreen",
          "&bAqua",
          "&3Dark Aqua",
          "&1Dark Blue",
          "&9Blue",
          "&dLight Purple",
          "&5Dark Purple",
          "&fWhite",
          "&7Gray",
          "&8Dark Gray",
          "&0Black"
        ]),
        new Setting.StringSelector("Discord User Color", 0, [
          "&4Dark Red",
          "&cRed",
          "&6Gold",
          "&eYellow",
          "&2Dark Green",
          "&aGreen",
          "&bAqua",
          "&3Dark Aqua",
          "&1Dark Blue",
          "&9Blue",
          "&dLight Purple",
          "&5Dark Purple",
          "&fWhite",
          "&7Gray",
          "&8Dark Gray",
          "&0Black"
        ]),
        new Setting.Button("Go Back to Main Settings", "Go Back", () => {
          ChatLib.command("bridge", true);
        })
      ]
    }
  ]
).setCommand("ubcolorsettings").setSize(250, 80);
Setting.register(settings);
register("command", () => Settings.openGUI()).setName("bridge");

register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot} ${*}: &r${player}: ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot} ${*}: &r${player}: ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${*} ${bot}: &r${player}: ${msg}&r");
register("chat", bridgeChat).setCriteria("&r&2Guild > ${bot}: &r${player}: ${msg}&r");

function bridgeChat(bot, player, msg, event) {
  if (!Settings.enabled) return;
  if (Settings.botName.toLowerCase() !== ChatLib.removeFormatting(bot).toLowerCase()) return;
  cancel(event);
  // Comented out code. will be brought back in when I figure out a way to effectivly work with Vigilance Selectors.
   //bcVar = Settings.bridgeColor
  // dcVar = Settings.discordColor
  // if (dcVar == 0) {discordColor = "&4"} else if (dcVar == 1) {discordColor = "&c"} else if (dcVar == 2) {discordColor = "&6"} else if (dcVar == 3) {discordColor = "&e"} else if (dcVar == 4) {discordColor = "&2"} else if (dcVar == 5) {discordColor = "&a"} else if (dcVar == 6) {discordColor = "&b"} else if (dcVar == 7) {discordColor = "&3"} else if (dcVar == 8){discordColor = "&1"} else if (dcVar == 9) {discordColor = "&9"} else if (dcVar == 10) {discordColor = "&d"} else if (dcVar == 11){discordColor = "&5"} else if (dcVar == 12 ) {discordColor = "&f"} else if (dcVar == 13 ) {discordColor = "&7"} else if (dcVar == 14) {discordColor = "&8"} else if (dcVar == 15) {discordColor = "&0"}
  // if (bcVar == 0) {bridgeColor = "&4"} else if (bcVar == 1) {bridgeColor = "&c"} else if (bcVar == 2) {bridgeColor = "&6"} else if (bcVar == 3) {bridgeColor = "&e"} else if (bcVar == 4) {bridgeColor = "&2"} else if (bcVar == 5) {bridgeColor = "&a"} else if (bcVar == 6) {bridgeColor = "&b"} else if (bcVar == 7) {bridgeColor = "&3"} else if (bcVar == 8){bridgeColor = "&1"} else if (bcVar == 9) {bridgeColor = "&9"} else if (bcVar == 10) {bridgeColor = "&d"} else if (bcVar == 11){bridgeColor = "&5"} else if (bcVar == 12 ) {bridgeColor = "&f"} else if (bcVar == 13 ) {bridgeColor = "&7"} else if (bcVar == 14) {bridgeColor = "&8"} else if (bcVar == 15) {bridgeColor = "&0"}
  bridgeText = Settings.prefix
  if (Settings.prefixBold == true) {bridgeBold = "&l"} else {bridgeBold = ""};
  if (Settings.userBold == true) {discordBold = "&l"} else {discordBold = ""}
  bridgeColor = settings.getSetting("Color Settings", "Bridge Color").substring(0, 2);
  discordColor = settings.getSetting("Color Settings", "Discord User Color").substring(0, 2);
  ChatLib.chat(`§2Guild > ${bridgeColor + bridgeBold + bridgeText} ${discordColor + discordBold + player}§r: ${msg}`);
}
// let bcVar
// let dcVar

// Now this contains some code from my unreleased module. I did not write this from scratch just for this module.
class Changelog {
  constructor(module, version, changelog) {
      this.module = module
      this.version = version
      this.changelog = changelog
      }
      writeChangelog() {
          if (!FileLib.read(`./config/ChatTriggers/modules/${cl.module}/update.txt`) == "true" || (!FileLib.read(`./config/ChatTriggers/modules/${cl.module}/update.txt`) == "false")){
              FileLib.write(`./config/ChatTriggers/modules/${cl.module}/update.txt`, "false")
          }
          if (FileLib.read(`./config/ChatTriggers/modules/${cl.module}/update.txt`) == "true") return;
          ChatLib.chat('&8---------- &f[&5ChatTriggers&f] &8----------')
          ChatLib.chat(`&e${cl.module} &ahas been updated to version &e${cl.version}`)
          ChatLib.chat(`&bChangelog&f: &r${cl.changelog}`)
          FileLib.write(`./config/ChatTriggers/modules/${cl.module}/update.txt`, "true")
      }
  }
const cl = new Changelog('UniversalBridge', '1.2.0', "&aAdded Vigilance for most settings.")
cl.writeChangelog()
