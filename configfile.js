import { @Vigilant, @TextProperty, @ColorProperty, @ButtonProperty, @SwitchProperty, Color, @CheckboxProperty, @SelectorProperty } from '../Vigilance/index';

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
        name: "Seperator",
        description: "The string that your guild uses to seperate the person's name from the message",
        category: "General"
    })
    seperator = ":"
    @SwitchProperty({
        name: "Use Antonio32A API",
        description: "Check the Antionio32A API to pull information for your guild. §cRequires your guild to use his bots",
        category: "General",
    })
    antonio = true
    @TextProperty({
        name: "Bridge Prefix",
        description: "Prefix for the guild bridge",
        category: "Appearance",
    })
    prefix = "[BRIDGE]"
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
    @CheckboxProperty({
        name: "Bridge Bold",
        description: "Check to make the bridge prefix bold",
        category: "Appearance",
    })
    prefixBold = false
    
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
    userColor = 1;
    
    @CheckboxProperty({
        name: "Discord User Bold",
        description: "Check to make the discord user bold",
        category: "Appearance",
    })
    userBold = false;



    constructor() {
        this.initialize(this);
        this.setCategoryDescription("General", "UniversalBridge by MisterCheezeCake")
        this.setCategoryDescription("Appearance", "UniversalBridge by MisterCheezeCake")
    }
}

export default new Settings;
