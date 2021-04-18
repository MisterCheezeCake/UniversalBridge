import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color, @CheckboxProperty, @SelectorProperty } from 'Vigilance';

@Vigilant("UniversalBridge")
class Settings {

    @SwitchProperty({
        name: "Enabled",
        description: "Toggle the module",
        category: "General",
    })
    enabled = true
    @TextProperty({
        name: "Bot Name",
        description: "Input the IGN of your guild bridge bot",
        category: "General",
        placeholder: "IGN Here"
    })
    botName = ""
    @TextProperty({
        name: "Bridge Prefix",
        description: "Prefix for the guild bridge",
        category: "Appearance",
    })
    prefix = "[BRIDGE]"
    // Will Renable when I find a simple way to convert these ints into mc color codes
    /*
    @SelectorProperty({
        name: "Bridge Color",
        description: "Select the color of your prefix",
        category: "Appearance",
        options: [
            "§4Dark Red",
            "§cRed",
            "§6Gold",
         "§eYellow", 
      "§2Dark Green", 
      "§aGreen", 
      "§bAqua",
       "§3Dark Aqua", 
       "§1Dark Blue", 
       "§9Blue", 
       "§dLight Purple", 
       "§5Dark Purple", 
       "§fWhite", 
       "§7Gray", 
       "§8Dark Grey", 
       "§0Black"
    ]

    })
    bridgeColor = 1;
    */
    @ButtonProperty({
        name: "Color Settings",
        description: "Open the color settings menu",
        category: "Appearance",
        placeholder: "Open"
    })
    openColorSettings() {
        ChatLib.command('ubcolorsettings', true)
    }
    @CheckboxProperty({
        name: "Bridge Bold",
        description: "Check to make the bridge prefix bold",
        category: "Appearance",
    })
    prefixBold = false
    /*
    @SelectorProperty({
        name: "Discord User Color",
        description: "Select the color of the discord user",
        category: "Appearance",
        options: [
            "§4Dark Red",
            "§cRed",
            "§6Gold",
         "§eYellow", 
      "§2Dark Green", 
      "§aGreen", 
      "§bAqua",
       "§3Dark Aqua", 
       "§1Dark Blue", 
       "§9Blue", 
       "§dLight Purple", 
       "§5Dark Purple", 
       "§fWhite", 
       "§7Gray", 
       "§8Dark Grey", 
       "§0Black"
    ]

    })
    prefixColor = 1;
    */
    @CheckboxProperty({
        name: "Discord User Bold",
        description: "Check to make the discord user bold",
        category: "Appearance",
    })
    userBold = false



    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "UniversalBridge by MisterCheezeCake")
        this.setCategoryDescription("Appearance", "UniversalBridge by MisterCheezeCake")
    }
}

export default new Settings;
