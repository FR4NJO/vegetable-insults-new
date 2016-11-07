'use strict';

define('vegetable_insults_new/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('vegetable_insults_new/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'vegetable_insults_new/tests/helpers/start-app', 'vegetable_insults_new/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _vegetable_insults_newTestsHelpersStartApp, _vegetable_insults_newTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _vegetable_insults_newTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _vegetable_insults_newTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('vegetable_insults_new/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/helpers/resolver', ['exports', 'vegetable_insults_new/resolver', 'vegetable_insults_new/config/environment'], function (exports, _vegetable_insults_newResolver, _vegetable_insults_newConfigEnvironment) {

  var resolver = _vegetable_insults_newResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _vegetable_insults_newConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _vegetable_insults_newConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('vegetable_insults_new/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/helpers/start-app', ['exports', 'ember', 'vegetable_insults_new/app', 'vegetable_insults_new/config/environment'], function (exports, _ember, _vegetable_insults_newApp, _vegetable_insults_newConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _vegetable_insults_newConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _vegetable_insults_newApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('vegetable_insults_new/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/routes/solute.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/solute.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/solute.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/test-helper', ['exports', 'vegetable_insults_new/tests/helpers/resolver', 'ember-qunit'], function (exports, _vegetable_insults_newTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_vegetable_insults_newTestsHelpersResolver['default']);
});
define('vegetable_insults_new/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | tests/helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tests/helpers/destroy-app.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | tests/helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tests/helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | tests/helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tests/helpers/resolver.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | tests/helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tests/helpers/start-app.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | tests/test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tests/test-helper.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/tests/unit/routes/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | tests/unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tests/unit/routes/index-test.js should pass jshint.');
  });
});
define('vegetable_insults_new/tests/tests/unit/routes/solute-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | tests/unit/routes/solute-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'tests/unit/routes/solute-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('vegetable_insults_new/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
