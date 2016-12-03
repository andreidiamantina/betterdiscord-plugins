//META{"name":"silentTyping"}*//

/*@cc_on
@if (@_jscript)
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you mistakenly tried to run me directly. (don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.\nJust reload Discord with Ctrl+R.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!\nJust reload Discord with Ctrl+R.", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();
@else @*/

var silentTyping = function () {};

silentTyping.prototype.start = function () {
    $("body").on("input.silentTyping", ".channel-textarea textarea", false);
};

silentTyping.prototype.stop = function () {
    $("body").off("input.silentTyping", ".channel-textarea textarea");
};

silentTyping.prototype.load = function () {};

silentTyping.prototype.unload = function () {};

silentTyping.prototype.getName = function () {
    return "Silent Typing";
};

silentTyping.prototype.getDescription = function () {
    return "Don't send typing notifications";
};

silentTyping.prototype.getVersion = function () {
    return "1.0.0";
};

silentTyping.prototype.getAuthor = function () {
    return "noodlebox";
};

/*@end @*/
