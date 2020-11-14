Java.perform(function () {
    console.log("[*] Run instrumentation");

	// task 1
	var pinFragment = Java.use("com.su.lab4.fragments.PinBypassFragment");
        for (var i = 0; i < 1000000; i++) {
                var pin = i.toString()
                if(pinFragment.checkPin(pin)) {
                        console.log(pin);
			break;
                }
        }
        console.log("BruteForce finished");

	// task 2
	var rootUtil = Java.use("com.su.lab4.utils.RootUtil");
	rootUtil.isRootAvailable.implementation = function() {
		return false;
	}
	
	// task 3
	var encUtils = Java.use("com.su.lab4.utils.EncryptionUtil");
	encUtils.encrypt.overload("java.lang.String", "java.lang.String").implementation = function(key, str) {
		return key;
	}
	
	// task 5
	var nativeHook = Java.use("com.su.lab4.fragments.NativeHookFragment");
	nativeHook.checkPassword.overload("java.lang.String").implementation = function(str) {
		return true;
	}

});
