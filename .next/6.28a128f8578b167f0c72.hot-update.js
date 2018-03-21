webpackHotUpdate(6,{

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(85);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),

/***/ 793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_compact__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_lodash_compact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_lodash_compact__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every__ = __webpack_require__(797);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash_every___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash_every__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_lodash_without___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_lodash_without__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_lodash_findIndex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_lodash_find___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_lodash_find__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_lodash_reduce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash_some__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__ = __webpack_require__(800);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_deburr__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_lodash_deburr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_lodash_deburr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_lodash_isFunction__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_filter__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_lodash_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_lodash_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_dropRight__ = __webpack_require__(801);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_lodash_dropRight___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_lodash_dropRight__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_size__ = __webpack_require__(802);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_lodash_size___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_lodash_size__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_union__ = __webpack_require__(806);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_lodash_union___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_lodash_union__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_get__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_lodash_get___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_lodash_get__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_includes__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_lodash_includes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_lodash_includes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_invoke__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_lodash_invoke__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_isEqual__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_lodash_isEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_lodash_isEqual__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_lodash_has__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_lodash_isNil__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_lodash_isNil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_classnames__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_prop_types__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_31_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_react__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__lib__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__elements_Icon__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__elements_Label__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__DropdownDivider__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__DropdownItem__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__DropdownHeader__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__DropdownMenu__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__DropdownSearchInput__ = __webpack_require__(547);












































var getKeyOrValue = function getKeyOrValue(key, value) {
  return __WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(key) ? value : key;
};

/**
 * A dropdown allows a user to select a value from a series of options.
 * @see Form
 * @see Select
 * @see Menu
 */

var Dropdown = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_inherits___default()(Dropdown, _Component);

  function Dropdown() {
    var _ref;

    var _temp, _this, _ret;

    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_classCallCheck___default()(this, Dropdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (e, value) {
      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onChange', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));
    }, _this.closeOnChange = function (e) {
      var _this$props = _this.props,
          closeOnChange = _this$props.closeOnChange,
          multiple = _this$props.multiple;

      var shouldClose = __WEBPACK_IMPORTED_MODULE_25_lodash_isUndefined___default()(closeOnChange) ? !multiple : closeOnChange;

      if (shouldClose) _this.close(e);
    }, _this.closeOnEscape = function (e) {
      if (__WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].Escape) return;
      e.preventDefault();
      _this.close();
    }, _this.moveSelectionOnKeyDown = function (e) {
      var _moves;

      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          selectOnNavigation = _this$props2.selectOnNavigation;

      var moves = (_moves = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_moves, __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].ArrowDown, 1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_moves, __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].ArrowUp, -1), _moves);
      var move = moves[__WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].getCode(e)];

      if (move === undefined) return;
      e.preventDefault();
      _this.moveSelectionBy(move);
      if (!multiple && selectOnNavigation) _this.makeSelectedItemActive(e);
    }, _this.openOnSpace = function (e) {

      if (__WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].Spacebar) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.openOnArrow = function (e) {

      var code = __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].getCode(e);
      if (!__WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()([__WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].ArrowDown, __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].ArrowUp], code)) return;
      if (_this.state.open) return;

      e.preventDefault();

      _this.open(e);
    }, _this.makeSelectedItemActive = function (e) {
      var open = _this.state.open;
      var multiple = _this.props.multiple;


      var item = _this.getSelectedItem();
      var value = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(item, 'value');

      // prevent selecting null if there was no selected item value
      // prevent selecting duplicate items when the dropdown is closed
      if (__WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(value) || !open) return;

      // state value may be undefined
      var newValue = multiple ? __WEBPACK_IMPORTED_MODULE_22_lodash_union___default()(_this.state.value, [value]) : value;

      // notify the onChange prop that the user is trying to change value
      _this.setValue(newValue);
      _this.setSelectedIndex(newValue);
      _this.handleChange(e, newValue);

      // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value
      if (item['data-additional']) __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onAddItem', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));
    }, _this.selectItemOnEnter = function (e) {
      var search = _this.props.search;


      if (__WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].Enter) return;
      e.preventDefault();

      var optionSize = __WEBPACK_IMPORTED_MODULE_21_lodash_size___default()(_this.getMenuOptions());
      if (search && optionSize === 0) return;

      _this.makeSelectedItemActive(e);
      _this.closeOnChange(e);
      _this.clearSearchQuery();
      if (search && _this.searchRef) _this.searchRef.focus();
    }, _this.removeItemOnBackspace = function (e) {
      var _this$props3 = _this.props,
          multiple = _this$props3.multiple,
          search = _this$props3.search;
      var _this$state = _this.state,
          searchQuery = _this$state.searchQuery,
          value = _this$state.value;


      if (__WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].getCode(e) !== __WEBPACK_IMPORTED_MODULE_33__lib__["v" /* keyboardKey */].Backspace) return;
      if (searchQuery || !search || !multiple || __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(value)) return;
      e.preventDefault();

      // remove most recent value
      var newValue = __WEBPACK_IMPORTED_MODULE_19_lodash_dropRight___default()(value);

      _this.setValue(newValue);
      _this.setSelectedIndex(newValue);
      _this.handleChange(e, newValue);
    }, _this.closeOnDocumentClick = function (e) {

      if (!_this.props.closeOnBlur) return;

      // If event happened in the dropdown, ignore it
      if (_this.ref && Object(__WEBPACK_IMPORTED_MODULE_33__lib__["o" /* doesNodeContainClick */])(_this.ref, e)) return;

      _this.close();
    }, _this.attachHandlersOnOpen = function () {
      __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].sub('keydown', [_this.closeOnEscape, _this.moveSelectionOnKeyDown, _this.selectItemOnEnter, _this.removeItemOnBackspace]);
      __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].sub('click', _this.closeOnDocumentClick);
      __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('keydown', [_this.openOnArrow, _this.openOnSpace]);
    }, _this.handleMouseDown = function (e) {

      _this.isMouseDown = true;
      __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].sub('mouseup', _this.handleDocumentMouseUp);
      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onMouseDown', e, _this.props);
    }, _this.handleDocumentMouseUp = function () {

      _this.isMouseDown = false;
      __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('mouseup', _this.handleDocumentMouseUp);
    }, _this.handleClick = function (e) {
      var _this$props4 = _this.props,
          minCharacters = _this$props4.minCharacters,
          search = _this$props4.search;
      var _this$state2 = _this.state,
          open = _this$state2.open,
          searchQuery = _this$state2.searchQuery;


      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
      // prevent closeOnDocumentClick()
      e.stopPropagation();

      if (!search) return _this.toggle(e);
      if (open) return;
      if (searchQuery.length >= minCharacters || minCharacters === 1) {
        _this.open(e);
        return;
      }
      if (_this.searchRef) _this.searchRef.focus();
    }, _this.handleIconClick = function (e) {

      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onClick', e, _this.props);
      // prevent handleClick()
      e.stopPropagation();
      _this.toggle(e);
    }, _this.handleItemClick = function (e, item) {
      var _this$props5 = _this.props,
          multiple = _this$props5.multiple,
          search = _this$props5.search;
      var value = item.value;

      // prevent toggle() in handleClick()

      e.stopPropagation();
      // prevent closeOnDocumentClick() if multiple or item is disabled
      if (multiple || item.disabled) e.nativeEvent.stopImmediatePropagation();
      if (item.disabled) return;

      var isAdditionItem = item['data-additional'];
      var newValue = multiple ? __WEBPACK_IMPORTED_MODULE_22_lodash_union___default()(_this.state.value, [value]) : value;

      // notify the onChange prop that the user is trying to change value
      _this.setValue(newValue);
      _this.setSelectedIndex(value);

      var optionSize = __WEBPACK_IMPORTED_MODULE_21_lodash_size___default()(_this.getMenuOptions());
      if (!multiple || isAdditionItem || optionSize === 1) _this.clearSearchQuery();

      _this.handleChange(e, newValue);
      _this.closeOnChange(e);

      // Heads up! This event handler should be called after `onChange`
      // Notify the onAddItem prop if this is a new value
      if (isAdditionItem) __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onAddItem', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { value: value }));

      if (multiple && search && _this.searchRef) _this.searchRef.focus();
    }, _this.handleFocus = function (e) {
      var focus = _this.state.focus;


      if (focus) return;

      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onFocus', e, _this.props);
      _this.setState({ focus: true });
    }, _this.handleBlur = function (e) {

      // Heads up! Don't remove this.
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/1315
      var currentTarget = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(e, 'currentTarget');
      if (currentTarget && currentTarget.contains(document.activeElement)) return;

      var _this$props6 = _this.props,
          closeOnBlur = _this$props6.closeOnBlur,
          multiple = _this$props6.multiple,
          onBlur = _this$props6.onBlur,
          selectOnBlur = _this$props6.selectOnBlur;
      // do not "blur" when the mouse is down inside of the Dropdown

      if (_this.isMouseDown) return;
      if (onBlur) onBlur(e, _this.props);
      if (selectOnBlur && !multiple) {
        _this.makeSelectedItemActive(e);
        if (closeOnBlur) _this.close();
      }
      _this.setState({ focus: false });
      _this.clearSearchQuery();
    }, _this.handleSearchChange = function (e, _ref2) {
      var value = _ref2.value;


      // prevent propagating to this.props.onChange()
      e.stopPropagation();

      var minCharacters = _this.props.minCharacters;
      var open = _this.state.open;

      var newQuery = value;

      __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(_this.props, 'onSearchChange', e, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, _this.props, { searchQuery: newQuery }));
      _this.trySetState({ searchQuery: newQuery }, { selectedIndex: 0 });

      // open search dropdown on search query
      if (!open && newQuery.length >= minCharacters) {
        _this.open();
        return;
      }
      // close search dropdown if search query is too small
      if (open && minCharacters !== 1 && newQuery.length < minCharacters) _this.close();
    }, _this.getMenuOptions = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var _this$props7 = _this.props,
          additionLabel = _this$props7.additionLabel,
          additionPosition = _this$props7.additionPosition,
          allowAdditions = _this$props7.allowAdditions,
          deburr = _this$props7.deburr,
          multiple = _this$props7.multiple,
          search = _this$props7.search;
      var searchQuery = _this.state.searchQuery;


      var filteredOptions = options;

      // filter out active options
      if (multiple) {
        filteredOptions = __WEBPACK_IMPORTED_MODULE_18_lodash_filter___default()(filteredOptions, function (opt) {
          return !__WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()(value, opt.value);
        });
      }

      // filter by search query
      if (search && searchQuery) {
        if (__WEBPACK_IMPORTED_MODULE_17_lodash_isFunction___default()(search)) {
          filteredOptions = search(filteredOptions, searchQuery);
        } else {
          // remove diacritics on search input and options, if deburr prop is set
          var strippedQuery = deburr ? __WEBPACK_IMPORTED_MODULE_16_lodash_deburr___default()(searchQuery) : searchQuery;

          var re = new RegExp(__WEBPACK_IMPORTED_MODULE_15_lodash_escapeRegExp___default()(strippedQuery), 'i');

          filteredOptions = __WEBPACK_IMPORTED_MODULE_18_lodash_filter___default()(filteredOptions, function (opt) {
            return re.test(deburr ? __WEBPACK_IMPORTED_MODULE_16_lodash_deburr___default()(opt.text) : opt.text);
          });
        }
      }

      // insert the "add" item
      if (allowAdditions && search && searchQuery && !__WEBPACK_IMPORTED_MODULE_14_lodash_some___default()(filteredOptions, { text: searchQuery })) {
        var additionLabelElement = __WEBPACK_IMPORTED_MODULE_32_react___default.a.isValidElement(additionLabel) ? __WEBPACK_IMPORTED_MODULE_32_react___default.a.cloneElement(additionLabel, { key: 'addition-label' }) : additionLabel || '';

        var addItem = {
          key: 'addition',
          // by using an array, we can pass multiple elements, but when doing so
          // we must specify a `key` for React to know which one is which
          text: [additionLabelElement, __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
            'b',
            { key: 'addition-query' },
            searchQuery
          )],
          value: searchQuery,
          className: 'addition',
          'data-additional': true
        };
        if (additionPosition === 'top') filteredOptions.unshift(addItem);else filteredOptions.push(addItem);
      }

      return filteredOptions;
    }, _this.getSelectedItem = function () {
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(options, '[' + selectedIndex + ']');
    }, _this.getEnabledIndices = function (givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_13_lodash_reduce___default()(options, function (memo, item, index) {
        if (!item.disabled) memo.push(index);
        return memo;
      }, []);
    }, _this.getItemByValue = function (value) {
      var options = _this.props.options;


      return __WEBPACK_IMPORTED_MODULE_12_lodash_find___default()(options, { value: value });
    }, _this.getMenuItemIndexByValue = function (value, givenOptions) {
      var options = givenOptions || _this.getMenuOptions();

      return __WEBPACK_IMPORTED_MODULE_11_lodash_findIndex___default()(options, ['value', value]);
    }, _this.getDropdownAriaOptions = function () {
      var _this$props8 = _this.props,
          loading = _this$props8.loading,
          disabled = _this$props8.disabled,
          search = _this$props8.search,
          multiple = _this$props8.multiple;
      var open = _this.state.open;

      var ariaOptions = {
        role: search ? 'combobox' : 'listbox',
        'aria-busy': loading,
        'aria-disabled': disabled,
        'aria-expanded': !!open
      };
      if (ariaOptions.role === 'listbox') {
        ariaOptions['aria-multiselectable'] = multiple;
      }
      return ariaOptions;
    }, _this.clearSearchQuery = function () {
      _this.trySetState({ searchQuery: '' });
    }, _this.setValue = function (value) {
      _this.trySetState({ value: value });
    }, _this.setSelectedIndex = function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.value;
      var optionsProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.options;
      var multiple = _this.props.multiple;
      var selectedIndex = _this.state.selectedIndex;

      var options = _this.getMenuOptions(value, optionsProps);
      var enabledIndicies = _this.getEnabledIndices(options);

      var newSelectedIndex = void 0;

      // update the selected index
      if (!selectedIndex || selectedIndex < 0) {
        var firstIndex = enabledIndicies[0];

        // Select the currently active item, if none, use the first item.
        // Multiple selects remove active items from the list,
        // their initial selected index should be 0.
        newSelectedIndex = multiple ? firstIndex : _this.getMenuItemIndexByValue(value, options) || enabledIndicies[0];
      } else if (multiple) {
        // multiple selects remove options from the menu as they are made active
        // keep the selected index within range of the remaining items
        if (selectedIndex >= options.length - 1) {
          newSelectedIndex = enabledIndicies[enabledIndicies.length - 1];
        }
      } else {
        var activeIndex = _this.getMenuItemIndexByValue(value, options);

        // regular selects can only have one active item
        // set the selected index to the currently active item
        newSelectedIndex = __WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()(enabledIndicies, activeIndex) ? activeIndex : undefined;
      }

      if (!newSelectedIndex || newSelectedIndex < 0) {
        newSelectedIndex = enabledIndicies[0];
      }

      _this.setState({ selectedIndex: newSelectedIndex });
    }, _this.handleLabelClick = function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();

      _this.setState({ selectedLabel: labelProps.value });

      var onLabelClick = _this.props.onLabelClick;

      if (onLabelClick) onLabelClick(e, labelProps);
    }, _this.handleLabelRemove = function (e, labelProps) {
      // prevent focusing search input on click
      e.stopPropagation();
      var value = _this.state.value;

      var newValue = __WEBPACK_IMPORTED_MODULE_10_lodash_without___default()(value, labelProps.value);


      _this.setValue(newValue);
      _this.setSelectedIndex(newValue);
      _this.handleChange(e, newValue);
    }, _this.moveSelectionBy = function (offset) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedIndex;


      var options = _this.getMenuOptions();

      // Prevent infinite loop
      // TODO: remove left part of condition after children API will be removed
      if (options === undefined || __WEBPACK_IMPORTED_MODULE_9_lodash_every___default()(options, 'disabled')) return;

      var lastIndex = options.length - 1;
      var wrapSelection = _this.props.wrapSelection;
      // next is after last, wrap to beginning
      // next is before first, wrap to end

      var nextIndex = startIndex + offset;

      // if 'wrapSelection' is set to false and selection is after last or before first, it just does not change
      if (!wrapSelection && (nextIndex > lastIndex || nextIndex < 0)) {
        nextIndex = startIndex;
      } else if (nextIndex > lastIndex) nextIndex = 0;else if (nextIndex < 0) nextIndex = lastIndex;

      if (options[nextIndex].disabled) {
        _this.moveSelectionBy(offset, nextIndex);
        return;
      }

      _this.setState({ selectedIndex: nextIndex });
      _this.scrollSelectedItemIntoView();
    }, _this.handleIconOverrides = function (predefinedProps) {
      return {
        onClick: function onClick(e) {
          __WEBPACK_IMPORTED_MODULE_26_lodash_invoke___default()(predefinedProps, 'onClick', e, predefinedProps);
          _this.handleIconClick(e);
        }
      };
    }, _this.handleSearchRef = function (c) {
      return _this.searchRef = c;
    }, _this.handleSizerRef = function (c) {
      return _this.sizerRef = c;
    }, _this.handleRef = function (c) {
      return _this.ref = c;
    }, _this.computeSearchInputTabIndex = function () {
      var _this$props9 = _this.props,
          disabled = _this$props9.disabled,
          tabIndex = _this$props9.tabIndex;


      if (!__WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(tabIndex)) return tabIndex;
      return disabled ? -1 : 0;
    }, _this.computeSearchInputWidth = function () {
      var searchQuery = _this.state.searchQuery;


      if (_this.sizerRef && searchQuery) {
        // resize the search input, temporarily show the sizer so we can measure it

        _this.sizerRef.style.display = 'inline';
        _this.sizerRef.textContent = searchQuery;
        var searchWidth = Math.ceil(_this.sizerRef.getBoundingClientRect().width);
        _this.sizerRef.style.removeProperty('display');

        return searchWidth;
      }
    }, _this.computeTabIndex = function () {
      var _this$props10 = _this.props,
          disabled = _this$props10.disabled,
          search = _this$props10.search,
          tabIndex = _this$props10.tabIndex;

      // don't set a root node tabIndex as the search input has its own tabIndex

      if (search) return undefined;
      if (disabled) return -1;
      return __WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(tabIndex) ? 0 : tabIndex;
    }, _this.scrollSelectedItemIntoView = function () {
      if (!_this.ref) return;
      var menu = _this.ref.querySelector('.menu.visible');
      if (!menu) return;
      var item = menu.querySelector('.item.selected');
      if (!item) return;

      var isOutOfUpperView = item.offsetTop < menu.scrollTop;
      var isOutOfLowerView = item.offsetTop + item.clientHeight > menu.scrollTop + menu.clientHeight;

      if (isOutOfUpperView) {
        menu.scrollTop = item.offsetTop;
      } else if (isOutOfLowerView) {
        menu.scrollTop = item.offsetTop + item.clientHeight - menu.clientHeight;
      }
    }, _this.open = function (e) {
      var _this$props11 = _this.props,
          disabled = _this$props11.disabled,
          onOpen = _this$props11.onOpen,
          search = _this$props11.search;

      if (disabled) return;
      if (search && _this.searchRef) _this.searchRef.focus();
      if (onOpen) onOpen(e, _this.props);

      _this.trySetState({ open: true });
      _this.scrollSelectedItemIntoView();
    }, _this.close = function (e) {
      var onClose = _this.props.onClose;

      if (onClose) onClose(e, _this.props);

      _this.trySetState({ open: false });
    }, _this.handleClose = function () {
      var hasSearchFocus = document.activeElement === _this.searchRef;
      var hasDropdownFocus = document.activeElement === _this.ref;
      var hasFocus = hasSearchFocus || hasDropdownFocus;
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/627
      // Blur the Dropdown on close so it is blurred after selecting an item.
      // This is to prevent it from re-opening when switching tabs after selecting an item.
      if (!hasSearchFocus) {
        _this.ref.blur();
      }

      // We need to keep the virtual model in sync with the browser focus change
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/692
      _this.setState({ focus: hasFocus });
    }, _this.toggle = function (e) {
      return _this.state.open ? _this.close(e) : _this.open(e);
    }, _this.renderText = function () {
      var _this$props12 = _this.props,
          multiple = _this$props12.multiple,
          placeholder = _this$props12.placeholder,
          search = _this$props12.search,
          text = _this$props12.text;
      var _this$state3 = _this.state,
          searchQuery = _this$state3.searchQuery,
          value = _this$state3.value,
          open = _this$state3.open;

      var hasValue = multiple ? !__WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(value) : !__WEBPACK_IMPORTED_MODULE_29_lodash_isNil___default()(value) && value !== '';

      var classes = __WEBPACK_IMPORTED_MODULE_30_classnames___default()(placeholder && !hasValue && 'default', 'text', search && searchQuery && 'filtered');
      var _text = placeholder;
      if (searchQuery) {
        _text = null;
      } else if (text) {
        _text = text;
      } else if (open && !multiple) {
        _text = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(_this.getSelectedItem(), 'text');
      } else if (hasValue) {
        _text = __WEBPACK_IMPORTED_MODULE_23_lodash_get___default()(_this.getItemByValue(value), 'text');
      }

      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
        'div',
        { className: classes, role: 'alert', 'aria-live': 'polite' },
        _text
      );
    }, _this.renderSearchInput = function () {
      var _this$props13 = _this.props,
          search = _this$props13.search,
          searchInput = _this$props13.searchInput;
      var searchQuery = _this.state.searchQuery;


      if (!search) return null;
      return __WEBPACK_IMPORTED_MODULE_40__DropdownSearchInput__["a" /* default */].create(searchInput, { defaultProps: {
          inputRef: _this.handleSearchRef,
          onChange: _this.handleSearchChange,
          style: { width: _this.computeSearchInputWidth() },
          tabIndex: _this.computeSearchInputTabIndex(),
          value: searchQuery
        } });
    }, _this.renderSearchSizer = function () {
      var _this$props14 = _this.props,
          search = _this$props14.search,
          multiple = _this$props14.multiple;


      if (!(search && multiple)) return null;
      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement('span', { className: 'sizer', ref: _this.handleSizerRef });
    }, _this.renderLabels = function () {
      var _this$props15 = _this.props,
          multiple = _this$props15.multiple,
          renderLabel = _this$props15.renderLabel;
      var _this$state4 = _this.state,
          selectedLabel = _this$state4.selectedLabel,
          value = _this$state4.value;

      if (!multiple || __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(value)) {
        return;
      }
      var selectedItems = __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(value, _this.getItemByValue);


      // if no item could be found for a given state value the selected item will be undefined
      // compact the selectedItems so we only have actual objects left
      return __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(__WEBPACK_IMPORTED_MODULE_7_lodash_compact___default()(selectedItems), function (item, index) {
        var defaultProps = {
          active: item.value === selectedLabel,
          as: 'a',
          key: getKeyOrValue(item.key, item.value),
          onClick: _this.handleLabelClick,
          onRemove: _this.handleLabelRemove,
          value: item.value
        };

        return __WEBPACK_IMPORTED_MODULE_35__elements_Label__["a" /* default */].create(renderLabel(item, index, defaultProps), { defaultProps: defaultProps });
      });
    }, _this.renderOptions = function () {
      var _this$props16 = _this.props,
          multiple = _this$props16.multiple,
          search = _this$props16.search,
          noResultsMessage = _this$props16.noResultsMessage;
      var _this$state5 = _this.state,
          selectedIndex = _this$state5.selectedIndex,
          value = _this$state5.value;

      var options = _this.getMenuOptions();

      if (noResultsMessage !== null && search && __WEBPACK_IMPORTED_MODULE_20_lodash_isEmpty___default()(options)) {
        return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
          'div',
          { className: 'message' },
          noResultsMessage
        );
      }

      var isActive = multiple ? function (optValue) {
        return __WEBPACK_IMPORTED_MODULE_24_lodash_includes___default()(value, optValue);
      } : function (optValue) {
        return optValue === value;
      };

      return __WEBPACK_IMPORTED_MODULE_8_lodash_map___default()(options, function (opt, i) {
        return __WEBPACK_IMPORTED_MODULE_37__DropdownItem__["a" /* default */].create(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
          active: isActive(opt.value),
          onClick: _this.handleItemClick,
          selected: selectedIndex === i
        }, opt, {
          key: getKeyOrValue(opt.key, opt.value),
          // Needed for handling click events on disabled items
          style: __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, opt.style, { pointerEvents: 'all' })
        }));
      });
    }, _this.renderMenu = function () {
      var _this$props17 = _this.props,
          children = _this$props17.children,
          direction = _this$props17.direction,
          header = _this$props17.header;
      var open = _this.state.open;

      var ariaOptions = _this.getDropdownMenuAriaOptions();

      // single menu child
      if (!__WEBPACK_IMPORTED_MODULE_33__lib__["d" /* childrenUtils */].isNil(children)) {
        var menuChild = __WEBPACK_IMPORTED_MODULE_32_react__["Children"].only(children);
        var className = __WEBPACK_IMPORTED_MODULE_30_classnames___default()(direction, Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(open, 'visible'), menuChild.props.className);

        return Object(__WEBPACK_IMPORTED_MODULE_32_react__["cloneElement"])(menuChild, __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({ className: className }, ariaOptions));
      }

      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_39__DropdownMenu__["a" /* default */],
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, ariaOptions, { direction: direction, open: open }),
        __WEBPACK_IMPORTED_MODULE_38__DropdownHeader__["a" /* default */].create(header),
        _this.renderOptions()
      );
    }, _temp), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);
  }

  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_createClass___default()(Dropdown, [{
    key: 'getInitialAutoControlledState',
    value: function getInitialAutoControlledState() {
      return { searchQuery: '' };
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _state = this.state,
          open = _state.open,
          value = _state.value;


      this.setValue(value);
      this.setSelectedIndex(value);

      if (open) {
        this.open();
        this.attachHandlersOnOpen();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_get___default()(Dropdown.prototype.__proto__ || Object.getPrototypeOf(Dropdown.prototype), 'componentWillReceiveProps', this).call(this, nextProps);


      /* eslint-disable no-console */
      if (true) {
        // in development, validate value type matches dropdown type
        var isNextValueArray = Array.isArray(nextProps.value);
        var hasValue = __WEBPACK_IMPORTED_MODULE_28_lodash_has___default()(nextProps, 'value');

        if (hasValue && nextProps.multiple && !isNextValueArray) {
          console.error('Dropdown `value` must be an array when `multiple` is set.' + (' Received type: `' + Object.prototype.toString.call(nextProps.value) + '`.'));
        } else if (hasValue && !nextProps.multiple && isNextValueArray) {
          console.error('Dropdown `value` must not be an array when `multiple` is not set.' + ' Either set `multiple={true}` or use a string or number value.');
        }
      }
      /* eslint-enable no-console */

      if (!Object(__WEBPACK_IMPORTED_MODULE_33__lib__["B" /* shallowEqual */])(nextProps.value, this.props.value)) {
        this.setValue(nextProps.value);
        this.setSelectedIndex(nextProps.value);
      }

      if (!__WEBPACK_IMPORTED_MODULE_27_lodash_isEqual___default()(nextProps.options, this.props.options)) {
        this.setSelectedIndex(undefined, nextProps.options);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !Object(__WEBPACK_IMPORTED_MODULE_33__lib__["B" /* shallowEqual */])(nextProps, this.props) || !Object(__WEBPACK_IMPORTED_MODULE_33__lib__["B" /* shallowEqual */])(nextState, this.state);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {

      // focused / blurred
      // eslint-disable-line complexity
      if (!prevState.focus && this.state.focus) {
        if (!this.isMouseDown) {
          var _props = this.props,
              minCharacters = _props.minCharacters,
              openOnFocus = _props.openOnFocus,
              search = _props.search;

          var openable = !search || search && minCharacters === 1;

          if (openOnFocus && openable) this.open();
        }
        if (!this.state.open) {
          __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].sub('keydown', [this.openOnArrow, this.openOnSpace]);
        } else {
          __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].sub('keydown', [this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        }
        __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].sub('keydown', this.removeItemOnBackspace);
      } else if (prevState.focus && !this.state.focus) {
        var closeOnBlur = this.props.closeOnBlur;

        if (!this.isMouseDown && closeOnBlur) {
          this.close();
        }
        __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('keydown', [this.openOnArrow, this.openOnSpace, this.moveSelectionOnKeyDown, this.selectItemOnEnter, this.removeItemOnBackspace]);
      }

      // opened / closed
      if (!prevState.open && this.state.open) {
        this.attachHandlersOnOpen();
        this.scrollSelectedItemIntoView();
      } else if (prevState.open && !this.state.open) {
        this.handleClose();
        __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('keydown', [this.closeOnEscape, this.moveSelectionOnKeyDown, this.selectItemOnEnter]);
        __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('click', this.closeOnDocumentClick);
        if (!this.state.focus) {
          __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('keydown', this.removeItemOnBackspace);
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {

      __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('keydown', [this.openOnArrow, this.openOnSpace, this.moveSelectionOnKeyDown, this.selectItemOnEnter, this.removeItemOnBackspace, this.closeOnEscape]);
      __WEBPACK_IMPORTED_MODULE_33__lib__["p" /* eventStack */].unsub('click', this.closeOnDocumentClick);
    }

    // ----------------------------------------
    // Document Event Handlers
    // ----------------------------------------

    // onChange needs to receive a value
    // can't rely on props.value if we are controlled


    // ----------------------------------------
    // Component Event Handlers
    // ----------------------------------------

    // ----------------------------------------
    // Getters
    // ----------------------------------------

    // There are times when we need to calculate the options based on a value
    // that hasn't yet been persisted to state.

  }, {
    key: 'getDropdownMenuAriaOptions',
    value: function getDropdownMenuAriaOptions() {
      var _props2 = this.props,
          search = _props2.search,
          multiple = _props2.multiple;

      var ariaOptions = {};

      if (search) {
        ariaOptions['aria-multiselectable'] = multiple;
        ariaOptions.role = 'listbox';
      }
      return ariaOptions;
    }

    // ----------------------------------------
    // Setters
    // ----------------------------------------

    // ----------------------------------------
    // Overrides
    // ----------------------------------------

    // ----------------------------------------
    // Refs
    // ----------------------------------------

    // ----------------------------------------
    // Helpers
    // ----------------------------------------

    // ----------------------------------------
    // Behavior
    // ----------------------------------------

    // ----------------------------------------
    // Render
    // ----------------------------------------

  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          basic = _props3.basic,
          button = _props3.button,
          className = _props3.className,
          compact = _props3.compact,
          disabled = _props3.disabled,
          error = _props3.error,
          fluid = _props3.fluid,
          floating = _props3.floating,
          icon = _props3.icon,
          inline = _props3.inline,
          item = _props3.item,
          labeled = _props3.labeled,
          loading = _props3.loading,
          multiple = _props3.multiple,
          pointing = _props3.pointing,
          search = _props3.search,
          selection = _props3.selection,
          scrolling = _props3.scrolling,
          simple = _props3.simple,
          trigger = _props3.trigger,
          upward = _props3.upward;
      var open = this.state.open;

      // Classes

      var classes = __WEBPACK_IMPORTED_MODULE_30_classnames___default()('ui', Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(open, 'active visible'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(disabled, 'disabled'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(error, 'error'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(loading, 'loading'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(basic, 'basic'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(button, 'button'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(compact, 'compact'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(fluid, 'fluid'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(floating, 'floating'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(inline, 'inline'),
      // TODO: consider augmentation to render Dropdowns as Button/Menu, solves icon/link item issues
      // https://github.com/Semantic-Org/Semantic-UI-React/issues/401#issuecomment-240487229
      // TODO: the icon class is only required when a dropdown is a button
      // useKeyOnly(icon, 'icon'),
      Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(labeled, 'labeled'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(item, 'item'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(multiple, 'multiple'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(search, 'search'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(selection, 'selection'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(simple, 'simple'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(scrolling, 'scrolling'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["C" /* useKeyOnly */])(upward, 'upward'), Object(__WEBPACK_IMPORTED_MODULE_33__lib__["D" /* useKeyOrValueAndKey */])(pointing, 'pointing'), 'dropdown', className);
      var rest = Object(__WEBPACK_IMPORTED_MODULE_33__lib__["s" /* getUnhandledProps */])(Dropdown, this.props);
      var ElementType = Object(__WEBPACK_IMPORTED_MODULE_33__lib__["r" /* getElementType */])(Dropdown, this.props);
      var ariaOptions = this.getDropdownAriaOptions(ElementType, this.props);

      return __WEBPACK_IMPORTED_MODULE_32_react___default.a.createElement(
        ElementType,
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, rest, ariaOptions, {
          className: classes,
          onBlur: this.handleBlur,
          onClick: this.handleClick,
          onMouseDown: this.handleMouseDown,
          onFocus: this.handleFocus,
          onChange: this.handleChange,
          tabIndex: this.computeTabIndex(),
          ref: this.handleRef
        }),
        this.renderLabels(),
        this.renderSearchInput(),
        this.renderSearchSizer(),
        trigger || this.renderText(),
        __WEBPACK_IMPORTED_MODULE_34__elements_Icon__["a" /* default */].create(icon, {
          overrideProps: this.handleIconOverrides
        }),
        this.renderMenu()
      );
    }
  }]);

  return Dropdown;
}(__WEBPACK_IMPORTED_MODULE_33__lib__["a" /* AutoControlledComponent */]);

Dropdown.defaultProps = {
  additionLabel: 'Add ',
  additionPosition: 'top',
  closeOnBlur: true,
  deburr: false,
  icon: 'dropdown',
  minCharacters: 1,
  noResultsMessage: 'No results found.',
  openOnFocus: true,
  renderLabel: function renderLabel(_ref3) {
    var text = _ref3.text;
    return text;
  },
  searchInput: 'text',
  selectOnBlur: true,
  selectOnNavigation: true,
  wrapSelection: true
};
Dropdown.autoControlledProps = ['open', 'searchQuery', 'selectedLabel', 'value'];
Dropdown._meta = {
  name: 'Dropdown',
  type: __WEBPACK_IMPORTED_MODULE_33__lib__["b" /* META */].TYPES.MODULE
};
Dropdown.Divider = __WEBPACK_IMPORTED_MODULE_36__DropdownDivider__["a" /* default */];
Dropdown.Header = __WEBPACK_IMPORTED_MODULE_38__DropdownHeader__["a" /* default */];
Dropdown.Item = __WEBPACK_IMPORTED_MODULE_37__DropdownItem__["a" /* default */];
Dropdown.Menu = __WEBPACK_IMPORTED_MODULE_39__DropdownMenu__["a" /* default */];
Dropdown.SearchInput = __WEBPACK_IMPORTED_MODULE_40__DropdownSearchInput__["a" /* default */];
Dropdown.handledProps = ['additionLabel', 'additionPosition', 'allowAdditions', 'as', 'basic', 'button', 'children', 'className', 'closeOnBlur', 'closeOnChange', 'compact', 'deburr', 'defaultOpen', 'defaultSearchQuery', 'defaultSelectedLabel', 'defaultValue', 'direction', 'disabled', 'error', 'floating', 'fluid', 'header', 'icon', 'inline', 'item', 'labeled', 'loading', 'minCharacters', 'multiple', 'noResultsMessage', 'onAddItem', 'onBlur', 'onChange', 'onClick', 'onClose', 'onFocus', 'onLabelClick', 'onMouseDown', 'onOpen', 'onSearchChange', 'open', 'openOnFocus', 'options', 'placeholder', 'pointing', 'renderLabel', 'scrolling', 'search', 'searchInput', 'searchQuery', 'selectOnBlur', 'selectOnNavigation', 'selectedLabel', 'selection', 'simple', 'tabIndex', 'text', 'trigger', 'upward', 'value', 'wrapSelection'];
/* harmony default export */ __webpack_exports__["a"] = (Dropdown);
Dropdown.propTypes =  true ? {
  /** An element type to render as (string or function). */
  as: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].as,

  /** Label prefixed to an option added by a user. */
  additionLabel: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.element, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string]),

  /** Position of the `Add: ...` option in the dropdown list ('top' or 'bottom'). */
  additionPosition: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOf(['top', 'bottom']),

  /**
   * Allow user additions to the list of options (boolean).
   * Requires the use of `selection`, `options` and `search`.
   */
  allowAdditions: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].demand(['options', 'selection', 'search']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool]),

  /** A Dropdown can reduce its complexity. */
  basic: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Format the Dropdown to appear as a button. */
  button: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Primary content. */
  children: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].disallow(['options', 'selection']), __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].givenProps({ children: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.any.isRequired }, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.element.isRequired)]),

  /** Additional classes. */
  className: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** Whether or not the menu should close when the dropdown is blurred. */
  closeOnBlur: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /**
   * Whether or not the menu should close when a value is selected from the dropdown.
   * By default, multiple selection dropdowns will remain open on change, while single
   * selection dropdowns will close on change.
   */
  closeOnChange: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A compact dropdown has no minimum width. */
  compact: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Whether or not the dropdown should strip diacritics in options and input search */
  deburr: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Initial value of open. */
  defaultOpen: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Initial value of searchQuery. */
  defaultSearchQuery: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** Currently selected label in multi-select. */
  defaultSelectedLabel: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string])]),

  /** Initial value or value array if multiple. */
  defaultValue: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number]))]),

  /** A dropdown menu can open to the left or to the right. */
  direction: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOf(['left', 'right']),

  /** A disabled dropdown menu or item does not allow user interaction. */
  disabled: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** An errored dropdown can alert a user to a problem. */
  error: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown menu can contain floated content. */
  floating: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can take the full width of its parent */
  fluid: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown menu can contain a header. */
  header: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node,

  /** Shorthand for Icon. */
  icon: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.object]),

  /** A dropdown can be formatted to appear inline in other content. */
  inline: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can be formatted as a Menu item. */
  item: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can be labeled. */
  labeled: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can show that it is currently loading data. */
  loading: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** The minimum characters for a search to begin showing results. */
  minCharacters: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number,

  /** A selection dropdown can allow multiple selections. */
  multiple: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Message to display when there are no results. */
  noResultsMessage: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /**
   * Called when a user adds a new item. Use this to update the options list.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and the new item's value.
   */
  onAddItem: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on blur.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onBlur: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when the user attempts to change the value.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props and proposed value.
   */
  onChange: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on click.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClick: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when a close event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onClose: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on focus.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onFocus: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when a multi-select label is clicked.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All label props.
   */
  onLabelClick: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on mousedown.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onMouseDown: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called when an open event happens.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props.
   */
  onOpen: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /**
   * Called on search input change.
   *
   * @param {SyntheticEvent} event - React's original SyntheticEvent.
   * @param {object} data - All props, includes current value of searchQuery.
   */
  onSearchChange: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /** Controls whether or not the dropdown menu is displayed. */
  open: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Whether or not the menu should open when the dropdown is focused. */
  openOnFocus: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Array of Dropdown.Item props e.g. `{ text: '', value: '' }` */
  options: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.shape(__WEBPACK_IMPORTED_MODULE_37__DropdownItem__["a" /* default */].propTypes))]),

  /** Placeholder text. */
  placeholder: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** A dropdown can be formatted so that its menu is pointing. */
  pointing: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOf(['left', 'right', 'top', 'top left', 'top right', 'bottom', 'bottom left', 'bottom right'])]),

  /**
   * Mapped over the active items and returns shorthand for the active item Labels.
   * Only applies to `multiple` Dropdowns.
   *
   * @param {object} item - A currently active dropdown item.
   * @param {number} index - The current index.
   * @param {object} defaultLabelProps - The default props for an active item Label.
   * @returns {*} Shorthand for a Label.
   */
  renderLabel: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func,

  /** A dropdown can have its menu scroll. */
  scrolling: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /**
   * A selection dropdown can allow a user to search through a large list of choices.
   * Pass a function here to replace the default search.
   */
  search: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.func]),

  /** A shorthand for a search input. */
  searchInput: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.array, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.object]),

  /** Current value of searchQuery. Creates a controlled component. */
  searchQuery: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  // TODO 'searchInMenu' or 'search='in menu' or ???  How to handle this markup and functionality?

  /** Define whether the highlighted item should be selected on blur. */
  selectOnBlur: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /**
   * Whether or not to change the value when navigating the menu using arrow keys.
   * Setting to false will require enter or left click to confirm a choice.
   */
  selectOnNavigation: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** Currently selected label in multi-select. */
  selectedLabel: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].demand(['multiple']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number])]),

  /** A dropdown can be used to select between choices in a form. */
  selection: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].disallow(['children']), __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].demand(['options']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool]),

  /** A simple dropdown can open without Javascript. */
  simple: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /** A dropdown can receive focus. */
  tabIndex: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string]),

  /** The text displayed in the dropdown, usually for the active item. */
  text: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string,

  /** Custom element to trigger the menu to become visible. Takes place of 'text'. */
  trigger: __WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].every([__WEBPACK_IMPORTED_MODULE_33__lib__["n" /* customPropTypes */].disallow(['selection', 'text']), __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.node]),

  /** Current value or value array if multiple. Creates a controlled component. */
  value: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.arrayOf(__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.number]))]),

  /** A dropdown can open upward. */
  upward: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool,

  /**
   * A dropdown will go to the last element when ArrowUp is pressed on the first,
   * or go to the first when ArrowDown is pressed on the last( aka infinite selection )
   */
  wrapSelection: __WEBPACK_IMPORTED_MODULE_31_prop_types___default.a.bool
} : {};

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi4yOGExMjhmODU3OGIxNjdmMGM3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcz84OTZkMTBhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zZW1hbnRpYy11aS1yZWFjdC9kaXN0L2VzL21vZHVsZXMvRHJvcGRvd24vRHJvcGRvd24uanM/MjRhYmJhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbnZhciBfZGVmaW5lUHJvcGVydHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVmaW5lUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5leHBvcnRzLmRlZmF1bHQgPSBmdW5jdGlvbiAob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanNcbi8vIG1vZHVsZSBpZCA9IDQ4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDYiLCJpbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfZ2V0MiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZ2V0JztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBfY29tcGFjdCBmcm9tICdsb2Rhc2gvY29tcGFjdCc7XG5pbXBvcnQgX21hcCBmcm9tICdsb2Rhc2gvbWFwJztcbmltcG9ydCBfZXZlcnkgZnJvbSAnbG9kYXNoL2V2ZXJ5JztcbmltcG9ydCBfd2l0aG91dCBmcm9tICdsb2Rhc2gvd2l0aG91dCc7XG5pbXBvcnQgX2ZpbmRJbmRleCBmcm9tICdsb2Rhc2gvZmluZEluZGV4JztcbmltcG9ydCBfZmluZCBmcm9tICdsb2Rhc2gvZmluZCc7XG5pbXBvcnQgX3JlZHVjZSBmcm9tICdsb2Rhc2gvcmVkdWNlJztcbmltcG9ydCBfc29tZSBmcm9tICdsb2Rhc2gvc29tZSc7XG5pbXBvcnQgX2VzY2FwZVJlZ0V4cCBmcm9tICdsb2Rhc2gvZXNjYXBlUmVnRXhwJztcbmltcG9ydCBfZGVidXJyIGZyb20gJ2xvZGFzaC9kZWJ1cnInO1xuaW1wb3J0IF9pc0Z1bmN0aW9uIGZyb20gJ2xvZGFzaC9pc0Z1bmN0aW9uJztcbmltcG9ydCBfZmlsdGVyIGZyb20gJ2xvZGFzaC9maWx0ZXInO1xuaW1wb3J0IF9kcm9wUmlnaHQgZnJvbSAnbG9kYXNoL2Ryb3BSaWdodCc7XG5pbXBvcnQgX2lzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xuaW1wb3J0IF9zaXplIGZyb20gJ2xvZGFzaC9zaXplJztcbmltcG9ydCBfdW5pb24gZnJvbSAnbG9kYXNoL3VuaW9uJztcbmltcG9ydCBfZ2V0IGZyb20gJ2xvZGFzaC9nZXQnO1xuaW1wb3J0IF9pbmNsdWRlcyBmcm9tICdsb2Rhc2gvaW5jbHVkZXMnO1xuaW1wb3J0IF9pc1VuZGVmaW5lZCBmcm9tICdsb2Rhc2gvaXNVbmRlZmluZWQnO1xuaW1wb3J0IF9pbnZva2UgZnJvbSAnbG9kYXNoL2ludm9rZSc7XG5pbXBvcnQgX2lzRXF1YWwgZnJvbSAnbG9kYXNoL2lzRXF1YWwnO1xuaW1wb3J0IF9oYXMgZnJvbSAnbG9kYXNoL2hhcyc7XG5pbXBvcnQgX2lzTmlsIGZyb20gJ2xvZGFzaC9pc05pbCc7XG5pbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIGNsb25lRWxlbWVudCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQXV0b0NvbnRyb2xsZWRDb21wb25lbnQgYXMgQ29tcG9uZW50LCBjaGlsZHJlblV0aWxzLCBjdXN0b21Qcm9wVHlwZXMsIGRvZXNOb2RlQ29udGFpbkNsaWNrLCBldmVudFN0YWNrLCBnZXRFbGVtZW50VHlwZSwgZ2V0VW5oYW5kbGVkUHJvcHMsIGtleWJvYXJkS2V5LCBNRVRBLCBvYmplY3REaWZmLCBzaGFsbG93RXF1YWwsIHVzZUtleU9ubHksIHVzZUtleU9yVmFsdWVBbmRLZXkgfSBmcm9tICcuLi8uLi9saWInO1xuaW1wb3J0IEljb24gZnJvbSAnLi4vLi4vZWxlbWVudHMvSWNvbic7XG5pbXBvcnQgTGFiZWwgZnJvbSAnLi4vLi4vZWxlbWVudHMvTGFiZWwnO1xuaW1wb3J0IERyb3Bkb3duRGl2aWRlciBmcm9tICcuL0Ryb3Bkb3duRGl2aWRlcic7XG5pbXBvcnQgRHJvcGRvd25JdGVtIGZyb20gJy4vRHJvcGRvd25JdGVtJztcbmltcG9ydCBEcm9wZG93bkhlYWRlciBmcm9tICcuL0Ryb3Bkb3duSGVhZGVyJztcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSAnLi9Ecm9wZG93bk1lbnUnO1xuaW1wb3J0IERyb3Bkb3duU2VhcmNoSW5wdXQgZnJvbSAnLi9Ecm9wZG93blNlYXJjaElucHV0JztcblxudmFyIGdldEtleU9yVmFsdWUgPSBmdW5jdGlvbiBnZXRLZXlPclZhbHVlKGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIF9pc05pbChrZXkpID8gdmFsdWUgOiBrZXk7XG59O1xuXG4vKipcbiAqIEEgZHJvcGRvd24gYWxsb3dzIGEgdXNlciB0byBzZWxlY3QgYSB2YWx1ZSBmcm9tIGEgc2VyaWVzIG9mIG9wdGlvbnMuXG4gKiBAc2VlIEZvcm1cbiAqIEBzZWUgU2VsZWN0XG4gKiBAc2VlIE1lbnVcbiAqL1xuXG52YXIgRHJvcGRvd24gPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoRHJvcGRvd24sIF9Db21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIERyb3Bkb3duKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEcm9wZG93bik7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gRHJvcGRvd24uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bikpLmNhbGwuYXBwbHkoX3JlZiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIChlLCB2YWx1ZSkge1xuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQ2hhbmdlJywgZSwgX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLCB7IHZhbHVlOiB2YWx1ZSB9KSk7XG4gICAgfSwgX3RoaXMuY2xvc2VPbkNoYW5nZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjbG9zZU9uQ2hhbmdlID0gX3RoaXMkcHJvcHMuY2xvc2VPbkNoYW5nZSxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzLm11bHRpcGxlO1xuXG4gICAgICB2YXIgc2hvdWxkQ2xvc2UgPSBfaXNVbmRlZmluZWQoY2xvc2VPbkNoYW5nZSkgPyAhbXVsdGlwbGUgOiBjbG9zZU9uQ2hhbmdlO1xuXG4gICAgICBpZiAoc2hvdWxkQ2xvc2UpIF90aGlzLmNsb3NlKGUpO1xuICAgIH0sIF90aGlzLmNsb3NlT25Fc2NhcGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGtleWJvYXJkS2V5LmdldENvZGUoZSkgIT09IGtleWJvYXJkS2V5LkVzY2FwZSkgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBfbW92ZXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMi5tdWx0aXBsZSxcbiAgICAgICAgICBzZWxlY3RPbk5hdmlnYXRpb24gPSBfdGhpcyRwcm9wczIuc2VsZWN0T25OYXZpZ2F0aW9uO1xuXG4gICAgICB2YXIgbW92ZXMgPSAoX21vdmVzID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfbW92ZXMsIGtleWJvYXJkS2V5LkFycm93RG93biwgMSksIF9kZWZpbmVQcm9wZXJ0eShfbW92ZXMsIGtleWJvYXJkS2V5LkFycm93VXAsIC0xKSwgX21vdmVzKTtcbiAgICAgIHZhciBtb3ZlID0gbW92ZXNba2V5Ym9hcmRLZXkuZ2V0Q29kZShlKV07XG5cbiAgICAgIGlmIChtb3ZlID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLm1vdmVTZWxlY3Rpb25CeShtb3ZlKTtcbiAgICAgIGlmICghbXVsdGlwbGUgJiYgc2VsZWN0T25OYXZpZ2F0aW9uKSBfdGhpcy5tYWtlU2VsZWN0ZWRJdGVtQWN0aXZlKGUpO1xuICAgIH0sIF90aGlzLm9wZW5PblNwYWNlID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgaWYgKGtleWJvYXJkS2V5LmdldENvZGUoZSkgIT09IGtleWJvYXJkS2V5LlNwYWNlYmFyKSByZXR1cm47XG4gICAgICBpZiAoX3RoaXMuc3RhdGUub3BlbikgcmV0dXJuO1xuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIF90aGlzLm9wZW4oZSk7XG4gICAgfSwgX3RoaXMub3Blbk9uQXJyb3cgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICB2YXIgY29kZSA9IGtleWJvYXJkS2V5LmdldENvZGUoZSk7XG4gICAgICBpZiAoIV9pbmNsdWRlcyhba2V5Ym9hcmRLZXkuQXJyb3dEb3duLCBrZXlib2FyZEtleS5BcnJvd1VwXSwgY29kZSkpIHJldHVybjtcbiAgICAgIGlmIChfdGhpcy5zdGF0ZS5vcGVuKSByZXR1cm47XG5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgX3RoaXMub3BlbihlKTtcbiAgICB9LCBfdGhpcy5tYWtlU2VsZWN0ZWRJdGVtQWN0aXZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvcGVuID0gX3RoaXMuc3RhdGUub3BlbjtcbiAgICAgIHZhciBtdWx0aXBsZSA9IF90aGlzLnByb3BzLm11bHRpcGxlO1xuXG5cbiAgICAgIHZhciBpdGVtID0gX3RoaXMuZ2V0U2VsZWN0ZWRJdGVtKCk7XG4gICAgICB2YXIgdmFsdWUgPSBfZ2V0KGl0ZW0sICd2YWx1ZScpO1xuXG4gICAgICAvLyBwcmV2ZW50IHNlbGVjdGluZyBudWxsIGlmIHRoZXJlIHdhcyBubyBzZWxlY3RlZCBpdGVtIHZhbHVlXG4gICAgICAvLyBwcmV2ZW50IHNlbGVjdGluZyBkdXBsaWNhdGUgaXRlbXMgd2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkXG4gICAgICBpZiAoX2lzTmlsKHZhbHVlKSB8fCAhb3BlbikgcmV0dXJuO1xuXG4gICAgICAvLyBzdGF0ZSB2YWx1ZSBtYXkgYmUgdW5kZWZpbmVkXG4gICAgICB2YXIgbmV3VmFsdWUgPSBtdWx0aXBsZSA/IF91bmlvbihfdGhpcy5zdGF0ZS52YWx1ZSwgW3ZhbHVlXSkgOiB2YWx1ZTtcblxuICAgICAgLy8gbm90aWZ5IHRoZSBvbkNoYW5nZSBwcm9wIHRoYXQgdGhlIHVzZXIgaXMgdHJ5aW5nIHRvIGNoYW5nZSB2YWx1ZVxuICAgICAgX3RoaXMuc2V0VmFsdWUobmV3VmFsdWUpO1xuICAgICAgX3RoaXMuc2V0U2VsZWN0ZWRJbmRleChuZXdWYWx1ZSk7XG4gICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UoZSwgbmV3VmFsdWUpO1xuXG4gICAgICAvLyBIZWFkcyB1cCEgVGhpcyBldmVudCBoYW5kbGVyIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgYG9uQ2hhbmdlYFxuICAgICAgLy8gTm90aWZ5IHRoZSBvbkFkZEl0ZW0gcHJvcCBpZiB0aGlzIGlzIGEgbmV3IHZhbHVlXG4gICAgICBpZiAoaXRlbVsnZGF0YS1hZGRpdGlvbmFsJ10pIF9pbnZva2UoX3RoaXMucHJvcHMsICdvbkFkZEl0ZW0nLCBlLCBfZXh0ZW5kcyh7fSwgX3RoaXMucHJvcHMsIHsgdmFsdWU6IHZhbHVlIH0pKTtcbiAgICB9LCBfdGhpcy5zZWxlY3RJdGVtT25FbnRlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VhcmNoID0gX3RoaXMucHJvcHMuc2VhcmNoO1xuXG5cbiAgICAgIGlmIChrZXlib2FyZEtleS5nZXRDb2RlKGUpICE9PSBrZXlib2FyZEtleS5FbnRlcikgcmV0dXJuO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB2YXIgb3B0aW9uU2l6ZSA9IF9zaXplKF90aGlzLmdldE1lbnVPcHRpb25zKCkpO1xuICAgICAgaWYgKHNlYXJjaCAmJiBvcHRpb25TaXplID09PSAwKSByZXR1cm47XG5cbiAgICAgIF90aGlzLm1ha2VTZWxlY3RlZEl0ZW1BY3RpdmUoZSk7XG4gICAgICBfdGhpcy5jbG9zZU9uQ2hhbmdlKGUpO1xuICAgICAgX3RoaXMuY2xlYXJTZWFyY2hRdWVyeSgpO1xuICAgICAgaWYgKHNlYXJjaCAmJiBfdGhpcy5zZWFyY2hSZWYpIF90aGlzLnNlYXJjaFJlZi5mb2N1cygpO1xuICAgIH0sIF90aGlzLnJlbW92ZUl0ZW1PbkJhY2tzcGFjZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczMubXVsdGlwbGUsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMzLnNlYXJjaDtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIHNlYXJjaFF1ZXJ5ID0gX3RoaXMkc3RhdGUuc2VhcmNoUXVlcnksXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZS52YWx1ZTtcblxuXG4gICAgICBpZiAoa2V5Ym9hcmRLZXkuZ2V0Q29kZShlKSAhPT0ga2V5Ym9hcmRLZXkuQmFja3NwYWNlKSByZXR1cm47XG4gICAgICBpZiAoc2VhcmNoUXVlcnkgfHwgIXNlYXJjaCB8fCAhbXVsdGlwbGUgfHwgX2lzRW1wdHkodmFsdWUpKSByZXR1cm47XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIC8vIHJlbW92ZSBtb3N0IHJlY2VudCB2YWx1ZVxuICAgICAgdmFyIG5ld1ZhbHVlID0gX2Ryb3BSaWdodCh2YWx1ZSk7XG5cbiAgICAgIF90aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIF90aGlzLnNldFNlbGVjdGVkSW5kZXgobmV3VmFsdWUpO1xuICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKGUsIG5ld1ZhbHVlKTtcbiAgICB9LCBfdGhpcy5jbG9zZU9uRG9jdW1lbnRDbGljayA9IGZ1bmN0aW9uIChlKSB7XG5cbiAgICAgIGlmICghX3RoaXMucHJvcHMuY2xvc2VPbkJsdXIpIHJldHVybjtcblxuICAgICAgLy8gSWYgZXZlbnQgaGFwcGVuZWQgaW4gdGhlIGRyb3Bkb3duLCBpZ25vcmUgaXRcbiAgICAgIGlmIChfdGhpcy5yZWYgJiYgZG9lc05vZGVDb250YWluQ2xpY2soX3RoaXMucmVmLCBlKSkgcmV0dXJuO1xuXG4gICAgICBfdGhpcy5jbG9zZSgpO1xuICAgIH0sIF90aGlzLmF0dGFjaEhhbmRsZXJzT25PcGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgZXZlbnRTdGFjay5zdWIoJ2tleWRvd24nLCBbX3RoaXMuY2xvc2VPbkVzY2FwZSwgX3RoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93biwgX3RoaXMuc2VsZWN0SXRlbU9uRW50ZXIsIF90aGlzLnJlbW92ZUl0ZW1PbkJhY2tzcGFjZV0pO1xuICAgICAgZXZlbnRTdGFjay5zdWIoJ2NsaWNrJywgX3RoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2spO1xuICAgICAgZXZlbnRTdGFjay51bnN1Yigna2V5ZG93bicsIFtfdGhpcy5vcGVuT25BcnJvdywgX3RoaXMub3Blbk9uU3BhY2VdKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVNb3VzZURvd24gPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICBfdGhpcy5pc01vdXNlRG93biA9IHRydWU7XG4gICAgICBldmVudFN0YWNrLnN1YignbW91c2V1cCcsIF90aGlzLmhhbmRsZURvY3VtZW50TW91c2VVcCk7XG4gICAgICBfaW52b2tlKF90aGlzLnByb3BzLCAnb25Nb3VzZURvd24nLCBlLCBfdGhpcy5wcm9wcyk7XG4gICAgfSwgX3RoaXMuaGFuZGxlRG9jdW1lbnRNb3VzZVVwID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICBfdGhpcy5pc01vdXNlRG93biA9IGZhbHNlO1xuICAgICAgZXZlbnRTdGFjay51bnN1YignbW91c2V1cCcsIF90aGlzLmhhbmRsZURvY3VtZW50TW91c2VVcCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlQ2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIF90aGlzJHByb3BzNCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG1pbkNoYXJhY3RlcnMgPSBfdGhpcyRwcm9wczQubWluQ2hhcmFjdGVycyxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczQuc2VhcmNoO1xuICAgICAgdmFyIF90aGlzJHN0YXRlMiA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRzdGF0ZTIub3BlbixcbiAgICAgICAgICBzZWFyY2hRdWVyeSA9IF90aGlzJHN0YXRlMi5zZWFyY2hRdWVyeTtcblxuXG4gICAgICBfaW52b2tlKF90aGlzLnByb3BzLCAnb25DbGljaycsIGUsIF90aGlzLnByb3BzKTtcbiAgICAgIC8vIHByZXZlbnQgY2xvc2VPbkRvY3VtZW50Q2xpY2soKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgaWYgKCFzZWFyY2gpIHJldHVybiBfdGhpcy50b2dnbGUoZSk7XG4gICAgICBpZiAob3BlbikgcmV0dXJuO1xuICAgICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA+PSBtaW5DaGFyYWN0ZXJzIHx8IG1pbkNoYXJhY3RlcnMgPT09IDEpIHtcbiAgICAgICAgX3RoaXMub3BlbihlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLnNlYXJjaFJlZikgX3RoaXMuc2VhcmNoUmVmLmZvY3VzKCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlSWNvbkNsaWNrID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uQ2xpY2snLCBlLCBfdGhpcy5wcm9wcyk7XG4gICAgICAvLyBwcmV2ZW50IGhhbmRsZUNsaWNrKClcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBfdGhpcy50b2dnbGUoZSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlSXRlbUNsaWNrID0gZnVuY3Rpb24gKGUsIGl0ZW0pIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczUgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzNS5tdWx0aXBsZSxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczUuc2VhcmNoO1xuICAgICAgdmFyIHZhbHVlID0gaXRlbS52YWx1ZTtcblxuICAgICAgLy8gcHJldmVudCB0b2dnbGUoKSBpbiBoYW5kbGVDbGljaygpXG5cbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBwcmV2ZW50IGNsb3NlT25Eb2N1bWVudENsaWNrKCkgaWYgbXVsdGlwbGUgb3IgaXRlbSBpcyBkaXNhYmxlZFxuICAgICAgaWYgKG11bHRpcGxlIHx8IGl0ZW0uZGlzYWJsZWQpIGUubmF0aXZlRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoaXRlbS5kaXNhYmxlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgaXNBZGRpdGlvbkl0ZW0gPSBpdGVtWydkYXRhLWFkZGl0aW9uYWwnXTtcbiAgICAgIHZhciBuZXdWYWx1ZSA9IG11bHRpcGxlID8gX3VuaW9uKF90aGlzLnN0YXRlLnZhbHVlLCBbdmFsdWVdKSA6IHZhbHVlO1xuXG4gICAgICAvLyBub3RpZnkgdGhlIG9uQ2hhbmdlIHByb3AgdGhhdCB0aGUgdXNlciBpcyB0cnlpbmcgdG8gY2hhbmdlIHZhbHVlXG4gICAgICBfdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICBfdGhpcy5zZXRTZWxlY3RlZEluZGV4KHZhbHVlKTtcblxuICAgICAgdmFyIG9wdGlvblNpemUgPSBfc2l6ZShfdGhpcy5nZXRNZW51T3B0aW9ucygpKTtcbiAgICAgIGlmICghbXVsdGlwbGUgfHwgaXNBZGRpdGlvbkl0ZW0gfHwgb3B0aW9uU2l6ZSA9PT0gMSkgX3RoaXMuY2xlYXJTZWFyY2hRdWVyeSgpO1xuXG4gICAgICBfdGhpcy5oYW5kbGVDaGFuZ2UoZSwgbmV3VmFsdWUpO1xuICAgICAgX3RoaXMuY2xvc2VPbkNoYW5nZShlKTtcblxuICAgICAgLy8gSGVhZHMgdXAhIFRoaXMgZXZlbnQgaGFuZGxlciBzaG91bGQgYmUgY2FsbGVkIGFmdGVyIGBvbkNoYW5nZWBcbiAgICAgIC8vIE5vdGlmeSB0aGUgb25BZGRJdGVtIHByb3AgaWYgdGhpcyBpcyBhIG5ldyB2YWx1ZVxuICAgICAgaWYgKGlzQWRkaXRpb25JdGVtKSBfaW52b2tlKF90aGlzLnByb3BzLCAnb25BZGRJdGVtJywgZSwgX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLCB7IHZhbHVlOiB2YWx1ZSB9KSk7XG5cbiAgICAgIGlmIChtdWx0aXBsZSAmJiBzZWFyY2ggJiYgX3RoaXMuc2VhcmNoUmVmKSBfdGhpcy5zZWFyY2hSZWYuZm9jdXMoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVGb2N1cyA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgZm9jdXMgPSBfdGhpcy5zdGF0ZS5mb2N1cztcblxuXG4gICAgICBpZiAoZm9jdXMpIHJldHVybjtcblxuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uRm9jdXMnLCBlLCBfdGhpcy5wcm9wcyk7XG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiB0cnVlIH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZUJsdXIgPSBmdW5jdGlvbiAoZSkge1xuXG4gICAgICAvLyBIZWFkcyB1cCEgRG9uJ3QgcmVtb3ZlIHRoaXMuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vU2VtYW50aWMtT3JnL1NlbWFudGljLVVJLVJlYWN0L2lzc3Vlcy8xMzE1XG4gICAgICB2YXIgY3VycmVudFRhcmdldCA9IF9nZXQoZSwgJ2N1cnJlbnRUYXJnZXQnKTtcbiAgICAgIGlmIChjdXJyZW50VGFyZ2V0ICYmIGN1cnJlbnRUYXJnZXQuY29udGFpbnMoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHJldHVybjtcblxuICAgICAgdmFyIF90aGlzJHByb3BzNiA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGNsb3NlT25CbHVyID0gX3RoaXMkcHJvcHM2LmNsb3NlT25CbHVyLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHM2Lm11bHRpcGxlLFxuICAgICAgICAgIG9uQmx1ciA9IF90aGlzJHByb3BzNi5vbkJsdXIsXG4gICAgICAgICAgc2VsZWN0T25CbHVyID0gX3RoaXMkcHJvcHM2LnNlbGVjdE9uQmx1cjtcbiAgICAgIC8vIGRvIG5vdCBcImJsdXJcIiB3aGVuIHRoZSBtb3VzZSBpcyBkb3duIGluc2lkZSBvZiB0aGUgRHJvcGRvd25cblxuICAgICAgaWYgKF90aGlzLmlzTW91c2VEb3duKSByZXR1cm47XG4gICAgICBpZiAob25CbHVyKSBvbkJsdXIoZSwgX3RoaXMucHJvcHMpO1xuICAgICAgaWYgKHNlbGVjdE9uQmx1ciAmJiAhbXVsdGlwbGUpIHtcbiAgICAgICAgX3RoaXMubWFrZVNlbGVjdGVkSXRlbUFjdGl2ZShlKTtcbiAgICAgICAgaWYgKGNsb3NlT25CbHVyKSBfdGhpcy5jbG9zZSgpO1xuICAgICAgfVxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBmb2N1czogZmFsc2UgfSk7XG4gICAgICBfdGhpcy5jbGVhclNlYXJjaFF1ZXJ5KCk7XG4gICAgfSwgX3RoaXMuaGFuZGxlU2VhcmNoQ2hhbmdlID0gZnVuY3Rpb24gKGUsIF9yZWYyKSB7XG4gICAgICB2YXIgdmFsdWUgPSBfcmVmMi52YWx1ZTtcblxuXG4gICAgICAvLyBwcmV2ZW50IHByb3BhZ2F0aW5nIHRvIHRoaXMucHJvcHMub25DaGFuZ2UoKVxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgdmFyIG1pbkNoYXJhY3RlcnMgPSBfdGhpcy5wcm9wcy5taW5DaGFyYWN0ZXJzO1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICB2YXIgbmV3UXVlcnkgPSB2YWx1ZTtcblxuICAgICAgX2ludm9rZShfdGhpcy5wcm9wcywgJ29uU2VhcmNoQ2hhbmdlJywgZSwgX2V4dGVuZHMoe30sIF90aGlzLnByb3BzLCB7IHNlYXJjaFF1ZXJ5OiBuZXdRdWVyeSB9KSk7XG4gICAgICBfdGhpcy50cnlTZXRTdGF0ZSh7IHNlYXJjaFF1ZXJ5OiBuZXdRdWVyeSB9LCB7IHNlbGVjdGVkSW5kZXg6IDAgfSk7XG5cbiAgICAgIC8vIG9wZW4gc2VhcmNoIGRyb3Bkb3duIG9uIHNlYXJjaCBxdWVyeVxuICAgICAgaWYgKCFvcGVuICYmIG5ld1F1ZXJ5Lmxlbmd0aCA+PSBtaW5DaGFyYWN0ZXJzKSB7XG4gICAgICAgIF90aGlzLm9wZW4oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gY2xvc2Ugc2VhcmNoIGRyb3Bkb3duIGlmIHNlYXJjaCBxdWVyeSBpcyB0b28gc21hbGxcbiAgICAgIGlmIChvcGVuICYmIG1pbkNoYXJhY3RlcnMgIT09IDEgJiYgbmV3UXVlcnkubGVuZ3RoIDwgbWluQ2hhcmFjdGVycykgX3RoaXMuY2xvc2UoKTtcbiAgICB9LCBfdGhpcy5nZXRNZW51T3B0aW9ucyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogX3RoaXMuc3RhdGUudmFsdWU7XG4gICAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3RoaXMucHJvcHMub3B0aW9ucztcbiAgICAgIHZhciBfdGhpcyRwcm9wczcgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBhZGRpdGlvbkxhYmVsID0gX3RoaXMkcHJvcHM3LmFkZGl0aW9uTGFiZWwsXG4gICAgICAgICAgYWRkaXRpb25Qb3NpdGlvbiA9IF90aGlzJHByb3BzNy5hZGRpdGlvblBvc2l0aW9uLFxuICAgICAgICAgIGFsbG93QWRkaXRpb25zID0gX3RoaXMkcHJvcHM3LmFsbG93QWRkaXRpb25zLFxuICAgICAgICAgIGRlYnVyciA9IF90aGlzJHByb3BzNy5kZWJ1cnIsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczcubXVsdGlwbGUsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHM3LnNlYXJjaDtcbiAgICAgIHZhciBzZWFyY2hRdWVyeSA9IF90aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5O1xuXG5cbiAgICAgIHZhciBmaWx0ZXJlZE9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICAvLyBmaWx0ZXIgb3V0IGFjdGl2ZSBvcHRpb25zXG4gICAgICBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgZmlsdGVyZWRPcHRpb25zID0gX2ZpbHRlcihmaWx0ZXJlZE9wdGlvbnMsIGZ1bmN0aW9uIChvcHQpIHtcbiAgICAgICAgICByZXR1cm4gIV9pbmNsdWRlcyh2YWx1ZSwgb3B0LnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIC8vIGZpbHRlciBieSBzZWFyY2ggcXVlcnlcbiAgICAgIGlmIChzZWFyY2ggJiYgc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgaWYgKF9pc0Z1bmN0aW9uKHNlYXJjaCkpIHtcbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMgPSBzZWFyY2goZmlsdGVyZWRPcHRpb25zLCBzZWFyY2hRdWVyeSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gcmVtb3ZlIGRpYWNyaXRpY3Mgb24gc2VhcmNoIGlucHV0IGFuZCBvcHRpb25zLCBpZiBkZWJ1cnIgcHJvcCBpcyBzZXRcbiAgICAgICAgICB2YXIgc3RyaXBwZWRRdWVyeSA9IGRlYnVyciA/IF9kZWJ1cnIoc2VhcmNoUXVlcnkpIDogc2VhcmNoUXVlcnk7XG5cbiAgICAgICAgICB2YXIgcmUgPSBuZXcgUmVnRXhwKF9lc2NhcGVSZWdFeHAoc3RyaXBwZWRRdWVyeSksICdpJyk7XG5cbiAgICAgICAgICBmaWx0ZXJlZE9wdGlvbnMgPSBfZmlsdGVyKGZpbHRlcmVkT3B0aW9ucywgZnVuY3Rpb24gKG9wdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlLnRlc3QoZGVidXJyID8gX2RlYnVycihvcHQudGV4dCkgOiBvcHQudGV4dCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaW5zZXJ0IHRoZSBcImFkZFwiIGl0ZW1cbiAgICAgIGlmIChhbGxvd0FkZGl0aW9ucyAmJiBzZWFyY2ggJiYgc2VhcmNoUXVlcnkgJiYgIV9zb21lKGZpbHRlcmVkT3B0aW9ucywgeyB0ZXh0OiBzZWFyY2hRdWVyeSB9KSkge1xuICAgICAgICB2YXIgYWRkaXRpb25MYWJlbEVsZW1lbnQgPSBSZWFjdC5pc1ZhbGlkRWxlbWVudChhZGRpdGlvbkxhYmVsKSA/IFJlYWN0LmNsb25lRWxlbWVudChhZGRpdGlvbkxhYmVsLCB7IGtleTogJ2FkZGl0aW9uLWxhYmVsJyB9KSA6IGFkZGl0aW9uTGFiZWwgfHwgJyc7XG5cbiAgICAgICAgdmFyIGFkZEl0ZW0gPSB7XG4gICAgICAgICAga2V5OiAnYWRkaXRpb24nLFxuICAgICAgICAgIC8vIGJ5IHVzaW5nIGFuIGFycmF5LCB3ZSBjYW4gcGFzcyBtdWx0aXBsZSBlbGVtZW50cywgYnV0IHdoZW4gZG9pbmcgc29cbiAgICAgICAgICAvLyB3ZSBtdXN0IHNwZWNpZnkgYSBga2V5YCBmb3IgUmVhY3QgdG8ga25vdyB3aGljaCBvbmUgaXMgd2hpY2hcbiAgICAgICAgICB0ZXh0OiBbYWRkaXRpb25MYWJlbEVsZW1lbnQsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnYicsXG4gICAgICAgICAgICB7IGtleTogJ2FkZGl0aW9uLXF1ZXJ5JyB9LFxuICAgICAgICAgICAgc2VhcmNoUXVlcnlcbiAgICAgICAgICApXSxcbiAgICAgICAgICB2YWx1ZTogc2VhcmNoUXVlcnksXG4gICAgICAgICAgY2xhc3NOYW1lOiAnYWRkaXRpb24nLFxuICAgICAgICAgICdkYXRhLWFkZGl0aW9uYWwnOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGlmIChhZGRpdGlvblBvc2l0aW9uID09PSAndG9wJykgZmlsdGVyZWRPcHRpb25zLnVuc2hpZnQoYWRkSXRlbSk7ZWxzZSBmaWx0ZXJlZE9wdGlvbnMucHVzaChhZGRJdGVtKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZpbHRlcmVkT3B0aW9ucztcbiAgICB9LCBfdGhpcy5nZXRTZWxlY3RlZEl0ZW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZWN0ZWRJbmRleCA9IF90aGlzLnN0YXRlLnNlbGVjdGVkSW5kZXg7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcblxuICAgICAgcmV0dXJuIF9nZXQob3B0aW9ucywgJ1snICsgc2VsZWN0ZWRJbmRleCArICddJyk7XG4gICAgfSwgX3RoaXMuZ2V0RW5hYmxlZEluZGljZXMgPSBmdW5jdGlvbiAoZ2l2ZW5PcHRpb25zKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGdpdmVuT3B0aW9ucyB8fCBfdGhpcy5nZXRNZW51T3B0aW9ucygpO1xuXG4gICAgICByZXR1cm4gX3JlZHVjZShvcHRpb25zLCBmdW5jdGlvbiAobWVtbywgaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkKSBtZW1vLnB1c2goaW5kZXgpO1xuICAgICAgICByZXR1cm4gbWVtbztcbiAgICAgIH0sIFtdKTtcbiAgICB9LCBfdGhpcy5nZXRJdGVtQnlWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIG9wdGlvbnMgPSBfdGhpcy5wcm9wcy5vcHRpb25zO1xuXG5cbiAgICAgIHJldHVybiBfZmluZChvcHRpb25zLCB7IHZhbHVlOiB2YWx1ZSB9KTtcbiAgICB9LCBfdGhpcy5nZXRNZW51SXRlbUluZGV4QnlWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSwgZ2l2ZW5PcHRpb25zKSB7XG4gICAgICB2YXIgb3B0aW9ucyA9IGdpdmVuT3B0aW9ucyB8fCBfdGhpcy5nZXRNZW51T3B0aW9ucygpO1xuXG4gICAgICByZXR1cm4gX2ZpbmRJbmRleChvcHRpb25zLCBbJ3ZhbHVlJywgdmFsdWVdKTtcbiAgICB9LCBfdGhpcy5nZXREcm9wZG93bkFyaWFPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOCA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGxvYWRpbmcgPSBfdGhpcyRwcm9wczgubG9hZGluZyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzOC5kaXNhYmxlZCxcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczguc2VhcmNoLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHM4Lm11bHRpcGxlO1xuICAgICAgdmFyIG9wZW4gPSBfdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICB2YXIgYXJpYU9wdGlvbnMgPSB7XG4gICAgICAgIHJvbGU6IHNlYXJjaCA/ICdjb21ib2JveCcgOiAnbGlzdGJveCcsXG4gICAgICAgICdhcmlhLWJ1c3knOiBsb2FkaW5nLFxuICAgICAgICAnYXJpYS1kaXNhYmxlZCc6IGRpc2FibGVkLFxuICAgICAgICAnYXJpYS1leHBhbmRlZCc6ICEhb3BlblxuICAgICAgfTtcbiAgICAgIGlmIChhcmlhT3B0aW9ucy5yb2xlID09PSAnbGlzdGJveCcpIHtcbiAgICAgICAgYXJpYU9wdGlvbnNbJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJ10gPSBtdWx0aXBsZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmlhT3B0aW9ucztcbiAgICB9LCBfdGhpcy5jbGVhclNlYXJjaFF1ZXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMudHJ5U2V0U3RhdGUoeyBzZWFyY2hRdWVyeTogJycgfSk7XG4gICAgfSwgX3RoaXMuc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIF90aGlzLnRyeVNldFN0YXRlKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgIH0sIF90aGlzLnNldFNlbGVjdGVkSW5kZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IF90aGlzLnN0YXRlLnZhbHVlO1xuICAgICAgdmFyIG9wdGlvbnNQcm9wcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3RoaXMucHJvcHMub3B0aW9ucztcbiAgICAgIHZhciBtdWx0aXBsZSA9IF90aGlzLnByb3BzLm11bHRpcGxlO1xuICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBfdGhpcy5zdGF0ZS5zZWxlY3RlZEluZGV4O1xuXG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldE1lbnVPcHRpb25zKHZhbHVlLCBvcHRpb25zUHJvcHMpO1xuICAgICAgdmFyIGVuYWJsZWRJbmRpY2llcyA9IF90aGlzLmdldEVuYWJsZWRJbmRpY2VzKG9wdGlvbnMpO1xuXG4gICAgICB2YXIgbmV3U2VsZWN0ZWRJbmRleCA9IHZvaWQgMDtcblxuICAgICAgLy8gdXBkYXRlIHRoZSBzZWxlY3RlZCBpbmRleFxuICAgICAgaWYgKCFzZWxlY3RlZEluZGV4IHx8IHNlbGVjdGVkSW5kZXggPCAwKSB7XG4gICAgICAgIHZhciBmaXJzdEluZGV4ID0gZW5hYmxlZEluZGljaWVzWzBdO1xuXG4gICAgICAgIC8vIFNlbGVjdCB0aGUgY3VycmVudGx5IGFjdGl2ZSBpdGVtLCBpZiBub25lLCB1c2UgdGhlIGZpcnN0IGl0ZW0uXG4gICAgICAgIC8vIE11bHRpcGxlIHNlbGVjdHMgcmVtb3ZlIGFjdGl2ZSBpdGVtcyBmcm9tIHRoZSBsaXN0LFxuICAgICAgICAvLyB0aGVpciBpbml0aWFsIHNlbGVjdGVkIGluZGV4IHNob3VsZCBiZSAwLlxuICAgICAgICBuZXdTZWxlY3RlZEluZGV4ID0gbXVsdGlwbGUgPyBmaXJzdEluZGV4IDogX3RoaXMuZ2V0TWVudUl0ZW1JbmRleEJ5VmFsdWUodmFsdWUsIG9wdGlvbnMpIHx8IGVuYWJsZWRJbmRpY2llc1swXTtcbiAgICAgIH0gZWxzZSBpZiAobXVsdGlwbGUpIHtcbiAgICAgICAgLy8gbXVsdGlwbGUgc2VsZWN0cyByZW1vdmUgb3B0aW9ucyBmcm9tIHRoZSBtZW51IGFzIHRoZXkgYXJlIG1hZGUgYWN0aXZlXG4gICAgICAgIC8vIGtlZXAgdGhlIHNlbGVjdGVkIGluZGV4IHdpdGhpbiByYW5nZSBvZiB0aGUgcmVtYWluaW5nIGl0ZW1zXG4gICAgICAgIGlmIChzZWxlY3RlZEluZGV4ID49IG9wdGlvbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgIG5ld1NlbGVjdGVkSW5kZXggPSBlbmFibGVkSW5kaWNpZXNbZW5hYmxlZEluZGljaWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgYWN0aXZlSW5kZXggPSBfdGhpcy5nZXRNZW51SXRlbUluZGV4QnlWYWx1ZSh2YWx1ZSwgb3B0aW9ucyk7XG5cbiAgICAgICAgLy8gcmVndWxhciBzZWxlY3RzIGNhbiBvbmx5IGhhdmUgb25lIGFjdGl2ZSBpdGVtXG4gICAgICAgIC8vIHNldCB0aGUgc2VsZWN0ZWQgaW5kZXggdG8gdGhlIGN1cnJlbnRseSBhY3RpdmUgaXRlbVxuICAgICAgICBuZXdTZWxlY3RlZEluZGV4ID0gX2luY2x1ZGVzKGVuYWJsZWRJbmRpY2llcywgYWN0aXZlSW5kZXgpID8gYWN0aXZlSW5kZXggOiB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIGlmICghbmV3U2VsZWN0ZWRJbmRleCB8fCBuZXdTZWxlY3RlZEluZGV4IDwgMCkge1xuICAgICAgICBuZXdTZWxlY3RlZEluZGV4ID0gZW5hYmxlZEluZGljaWVzWzBdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkSW5kZXg6IG5ld1NlbGVjdGVkSW5kZXggfSk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTGFiZWxDbGljayA9IGZ1bmN0aW9uIChlLCBsYWJlbFByb3BzKSB7XG4gICAgICAvLyBwcmV2ZW50IGZvY3VzaW5nIHNlYXJjaCBpbnB1dCBvbiBjbGlja1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgX3RoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZExhYmVsOiBsYWJlbFByb3BzLnZhbHVlIH0pO1xuXG4gICAgICB2YXIgb25MYWJlbENsaWNrID0gX3RoaXMucHJvcHMub25MYWJlbENsaWNrO1xuXG4gICAgICBpZiAob25MYWJlbENsaWNrKSBvbkxhYmVsQ2xpY2soZSwgbGFiZWxQcm9wcyk7XG4gICAgfSwgX3RoaXMuaGFuZGxlTGFiZWxSZW1vdmUgPSBmdW5jdGlvbiAoZSwgbGFiZWxQcm9wcykge1xuICAgICAgLy8gcHJldmVudCBmb2N1c2luZyBzZWFyY2ggaW5wdXQgb24gY2xpY2tcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB2YXIgdmFsdWUgPSBfdGhpcy5zdGF0ZS52YWx1ZTtcblxuICAgICAgdmFyIG5ld1ZhbHVlID0gX3dpdGhvdXQodmFsdWUsIGxhYmVsUHJvcHMudmFsdWUpO1xuXG5cbiAgICAgIF90aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgIF90aGlzLnNldFNlbGVjdGVkSW5kZXgobmV3VmFsdWUpO1xuICAgICAgX3RoaXMuaGFuZGxlQ2hhbmdlKGUsIG5ld1ZhbHVlKTtcbiAgICB9LCBfdGhpcy5tb3ZlU2VsZWN0aW9uQnkgPSBmdW5jdGlvbiAob2Zmc2V0KSB7XG4gICAgICB2YXIgc3RhcnRJbmRleCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogX3RoaXMuc3RhdGUuc2VsZWN0ZWRJbmRleDtcblxuXG4gICAgICB2YXIgb3B0aW9ucyA9IF90aGlzLmdldE1lbnVPcHRpb25zKCk7XG5cbiAgICAgIC8vIFByZXZlbnQgaW5maW5pdGUgbG9vcFxuICAgICAgLy8gVE9ETzogcmVtb3ZlIGxlZnQgcGFydCBvZiBjb25kaXRpb24gYWZ0ZXIgY2hpbGRyZW4gQVBJIHdpbGwgYmUgcmVtb3ZlZFxuICAgICAgaWYgKG9wdGlvbnMgPT09IHVuZGVmaW5lZCB8fCBfZXZlcnkob3B0aW9ucywgJ2Rpc2FibGVkJykpIHJldHVybjtcblxuICAgICAgdmFyIGxhc3RJbmRleCA9IG9wdGlvbnMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciB3cmFwU2VsZWN0aW9uID0gX3RoaXMucHJvcHMud3JhcFNlbGVjdGlvbjtcbiAgICAgIC8vIG5leHQgaXMgYWZ0ZXIgbGFzdCwgd3JhcCB0byBiZWdpbm5pbmdcbiAgICAgIC8vIG5leHQgaXMgYmVmb3JlIGZpcnN0LCB3cmFwIHRvIGVuZFxuXG4gICAgICB2YXIgbmV4dEluZGV4ID0gc3RhcnRJbmRleCArIG9mZnNldDtcblxuICAgICAgLy8gaWYgJ3dyYXBTZWxlY3Rpb24nIGlzIHNldCB0byBmYWxzZSBhbmQgc2VsZWN0aW9uIGlzIGFmdGVyIGxhc3Qgb3IgYmVmb3JlIGZpcnN0LCBpdCBqdXN0IGRvZXMgbm90IGNoYW5nZVxuICAgICAgaWYgKCF3cmFwU2VsZWN0aW9uICYmIChuZXh0SW5kZXggPiBsYXN0SW5kZXggfHwgbmV4dEluZGV4IDwgMCkpIHtcbiAgICAgICAgbmV4dEluZGV4ID0gc3RhcnRJbmRleDtcbiAgICAgIH0gZWxzZSBpZiAobmV4dEluZGV4ID4gbGFzdEluZGV4KSBuZXh0SW5kZXggPSAwO2Vsc2UgaWYgKG5leHRJbmRleCA8IDApIG5leHRJbmRleCA9IGxhc3RJbmRleDtcblxuICAgICAgaWYgKG9wdGlvbnNbbmV4dEluZGV4XS5kaXNhYmxlZCkge1xuICAgICAgICBfdGhpcy5tb3ZlU2VsZWN0aW9uQnkob2Zmc2V0LCBuZXh0SW5kZXgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRJbmRleDogbmV4dEluZGV4IH0pO1xuICAgICAgX3RoaXMuc2Nyb2xsU2VsZWN0ZWRJdGVtSW50b1ZpZXcoKTtcbiAgICB9LCBfdGhpcy5oYW5kbGVJY29uT3ZlcnJpZGVzID0gZnVuY3Rpb24gKHByZWRlZmluZWRQcm9wcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhlKSB7XG4gICAgICAgICAgX2ludm9rZShwcmVkZWZpbmVkUHJvcHMsICdvbkNsaWNrJywgZSwgcHJlZGVmaW5lZFByb3BzKTtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVJY29uQ2xpY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSwgX3RoaXMuaGFuZGxlU2VhcmNoUmVmID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zZWFyY2hSZWYgPSBjO1xuICAgIH0sIF90aGlzLmhhbmRsZVNpemVyUmVmID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5zaXplclJlZiA9IGM7XG4gICAgfSwgX3RoaXMuaGFuZGxlUmVmID0gZnVuY3Rpb24gKGMpIHtcbiAgICAgIHJldHVybiBfdGhpcy5yZWYgPSBjO1xuICAgIH0sIF90aGlzLmNvbXB1dGVTZWFyY2hJbnB1dFRhYkluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzOSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHM5LmRpc2FibGVkLFxuICAgICAgICAgIHRhYkluZGV4ID0gX3RoaXMkcHJvcHM5LnRhYkluZGV4O1xuXG5cbiAgICAgIGlmICghX2lzTmlsKHRhYkluZGV4KSkgcmV0dXJuIHRhYkluZGV4O1xuICAgICAgcmV0dXJuIGRpc2FibGVkID8gLTEgOiAwO1xuICAgIH0sIF90aGlzLmNvbXB1dGVTZWFyY2hJbnB1dFdpZHRoID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlYXJjaFF1ZXJ5ID0gX3RoaXMuc3RhdGUuc2VhcmNoUXVlcnk7XG5cblxuICAgICAgaWYgKF90aGlzLnNpemVyUmVmICYmIHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgIC8vIHJlc2l6ZSB0aGUgc2VhcmNoIGlucHV0LCB0ZW1wb3JhcmlseSBzaG93IHRoZSBzaXplciBzbyB3ZSBjYW4gbWVhc3VyZSBpdFxuXG4gICAgICAgIF90aGlzLnNpemVyUmVmLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgICAgICAgX3RoaXMuc2l6ZXJSZWYudGV4dENvbnRlbnQgPSBzZWFyY2hRdWVyeTtcbiAgICAgICAgdmFyIHNlYXJjaFdpZHRoID0gTWF0aC5jZWlsKF90aGlzLnNpemVyUmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgICAgX3RoaXMuc2l6ZXJSZWYuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2Rpc3BsYXknKTtcblxuICAgICAgICByZXR1cm4gc2VhcmNoV2lkdGg7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuY29tcHV0ZVRhYkluZGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTAgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBkaXNhYmxlZCA9IF90aGlzJHByb3BzMTAuZGlzYWJsZWQsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMxMC5zZWFyY2gsXG4gICAgICAgICAgdGFiSW5kZXggPSBfdGhpcyRwcm9wczEwLnRhYkluZGV4O1xuXG4gICAgICAvLyBkb24ndCBzZXQgYSByb290IG5vZGUgdGFiSW5kZXggYXMgdGhlIHNlYXJjaCBpbnB1dCBoYXMgaXRzIG93biB0YWJJbmRleFxuXG4gICAgICBpZiAoc2VhcmNoKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgaWYgKGRpc2FibGVkKSByZXR1cm4gLTE7XG4gICAgICByZXR1cm4gX2lzTmlsKHRhYkluZGV4KSA/IDAgOiB0YWJJbmRleDtcbiAgICB9LCBfdGhpcy5zY3JvbGxTZWxlY3RlZEl0ZW1JbnRvVmlldyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghX3RoaXMucmVmKSByZXR1cm47XG4gICAgICB2YXIgbWVudSA9IF90aGlzLnJlZi5xdWVyeVNlbGVjdG9yKCcubWVudS52aXNpYmxlJyk7XG4gICAgICBpZiAoIW1lbnUpIHJldHVybjtcbiAgICAgIHZhciBpdGVtID0gbWVudS5xdWVyeVNlbGVjdG9yKCcuaXRlbS5zZWxlY3RlZCcpO1xuICAgICAgaWYgKCFpdGVtKSByZXR1cm47XG5cbiAgICAgIHZhciBpc091dE9mVXBwZXJWaWV3ID0gaXRlbS5vZmZzZXRUb3AgPCBtZW51LnNjcm9sbFRvcDtcbiAgICAgIHZhciBpc091dE9mTG93ZXJWaWV3ID0gaXRlbS5vZmZzZXRUb3AgKyBpdGVtLmNsaWVudEhlaWdodCA+IG1lbnUuc2Nyb2xsVG9wICsgbWVudS5jbGllbnRIZWlnaHQ7XG5cbiAgICAgIGlmIChpc091dE9mVXBwZXJWaWV3KSB7XG4gICAgICAgIG1lbnUuc2Nyb2xsVG9wID0gaXRlbS5vZmZzZXRUb3A7XG4gICAgICB9IGVsc2UgaWYgKGlzT3V0T2ZMb3dlclZpZXcpIHtcbiAgICAgICAgbWVudS5zY3JvbGxUb3AgPSBpdGVtLm9mZnNldFRvcCArIGl0ZW0uY2xpZW50SGVpZ2h0IC0gbWVudS5jbGllbnRIZWlnaHQ7XG4gICAgICB9XG4gICAgfSwgX3RoaXMub3BlbiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkcHJvcHMxMS5kaXNhYmxlZCxcbiAgICAgICAgICBvbk9wZW4gPSBfdGhpcyRwcm9wczExLm9uT3BlbixcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczExLnNlYXJjaDtcblxuICAgICAgaWYgKGRpc2FibGVkKSByZXR1cm47XG4gICAgICBpZiAoc2VhcmNoICYmIF90aGlzLnNlYXJjaFJlZikgX3RoaXMuc2VhcmNoUmVmLmZvY3VzKCk7XG4gICAgICBpZiAob25PcGVuKSBvbk9wZW4oZSwgX3RoaXMucHJvcHMpO1xuXG4gICAgICBfdGhpcy50cnlTZXRTdGF0ZSh7IG9wZW46IHRydWUgfSk7XG4gICAgICBfdGhpcy5zY3JvbGxTZWxlY3RlZEl0ZW1JbnRvVmlldygpO1xuICAgIH0sIF90aGlzLmNsb3NlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBvbkNsb3NlID0gX3RoaXMucHJvcHMub25DbG9zZTtcblxuICAgICAgaWYgKG9uQ2xvc2UpIG9uQ2xvc2UoZSwgX3RoaXMucHJvcHMpO1xuXG4gICAgICBfdGhpcy50cnlTZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pO1xuICAgIH0sIF90aGlzLmhhbmRsZUNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGhhc1NlYXJjaEZvY3VzID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gX3RoaXMuc2VhcmNoUmVmO1xuICAgICAgdmFyIGhhc0Ryb3Bkb3duRm9jdXMgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBfdGhpcy5yZWY7XG4gICAgICB2YXIgaGFzRm9jdXMgPSBoYXNTZWFyY2hGb2N1cyB8fCBoYXNEcm9wZG93bkZvY3VzO1xuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1NlbWFudGljLU9yZy9TZW1hbnRpYy1VSS1SZWFjdC9pc3N1ZXMvNjI3XG4gICAgICAvLyBCbHVyIHRoZSBEcm9wZG93biBvbiBjbG9zZSBzbyBpdCBpcyBibHVycmVkIGFmdGVyIHNlbGVjdGluZyBhbiBpdGVtLlxuICAgICAgLy8gVGhpcyBpcyB0byBwcmV2ZW50IGl0IGZyb20gcmUtb3BlbmluZyB3aGVuIHN3aXRjaGluZyB0YWJzIGFmdGVyIHNlbGVjdGluZyBhbiBpdGVtLlxuICAgICAgaWYgKCFoYXNTZWFyY2hGb2N1cykge1xuICAgICAgICBfdGhpcy5yZWYuYmx1cigpO1xuICAgICAgfVxuXG4gICAgICAvLyBXZSBuZWVkIHRvIGtlZXAgdGhlIHZpcnR1YWwgbW9kZWwgaW4gc3luYyB3aXRoIHRoZSBicm93c2VyIGZvY3VzIGNoYW5nZVxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL1NlbWFudGljLU9yZy9TZW1hbnRpYy1VSS1SZWFjdC9pc3N1ZXMvNjkyXG4gICAgICBfdGhpcy5zZXRTdGF0ZSh7IGZvY3VzOiBoYXNGb2N1cyB9KTtcbiAgICB9LCBfdGhpcy50b2dnbGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIF90aGlzLnN0YXRlLm9wZW4gPyBfdGhpcy5jbG9zZShlKSA6IF90aGlzLm9wZW4oZSk7XG4gICAgfSwgX3RoaXMucmVuZGVyVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczEyID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczEyLm11bHRpcGxlLFxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gX3RoaXMkcHJvcHMxMi5wbGFjZWhvbGRlcixcbiAgICAgICAgICBzZWFyY2ggPSBfdGhpcyRwcm9wczEyLnNlYXJjaCxcbiAgICAgICAgICB0ZXh0ID0gX3RoaXMkcHJvcHMxMi50ZXh0O1xuICAgICAgdmFyIF90aGlzJHN0YXRlMyA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIHNlYXJjaFF1ZXJ5ID0gX3RoaXMkc3RhdGUzLnNlYXJjaFF1ZXJ5LFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkc3RhdGUzLnZhbHVlLFxuICAgICAgICAgIG9wZW4gPSBfdGhpcyRzdGF0ZTMub3BlbjtcblxuICAgICAgdmFyIGhhc1ZhbHVlID0gbXVsdGlwbGUgPyAhX2lzRW1wdHkodmFsdWUpIDogIV9pc05pbCh2YWx1ZSkgJiYgdmFsdWUgIT09ICcnO1xuXG4gICAgICB2YXIgY2xhc3NlcyA9IGN4KHBsYWNlaG9sZGVyICYmICFoYXNWYWx1ZSAmJiAnZGVmYXVsdCcsICd0ZXh0Jywgc2VhcmNoICYmIHNlYXJjaFF1ZXJ5ICYmICdmaWx0ZXJlZCcpO1xuICAgICAgdmFyIF90ZXh0ID0gcGxhY2Vob2xkZXI7XG4gICAgICBpZiAoc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgX3RleHQgPSBudWxsO1xuICAgICAgfSBlbHNlIGlmICh0ZXh0KSB7XG4gICAgICAgIF90ZXh0ID0gdGV4dDtcbiAgICAgIH0gZWxzZSBpZiAob3BlbiAmJiAhbXVsdGlwbGUpIHtcbiAgICAgICAgX3RleHQgPSBfZ2V0KF90aGlzLmdldFNlbGVjdGVkSXRlbSgpLCAndGV4dCcpO1xuICAgICAgfSBlbHNlIGlmIChoYXNWYWx1ZSkge1xuICAgICAgICBfdGV4dCA9IF9nZXQoX3RoaXMuZ2V0SXRlbUJ5VmFsdWUodmFsdWUpLCAndGV4dCcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc2VzLCByb2xlOiAnYWxlcnQnLCAnYXJpYS1saXZlJzogJ3BvbGl0ZScgfSxcbiAgICAgICAgX3RleHRcbiAgICAgICk7XG4gICAgfSwgX3RoaXMucmVuZGVyU2VhcmNoSW5wdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxMyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIHNlYXJjaCA9IF90aGlzJHByb3BzMTMuc2VhcmNoLFxuICAgICAgICAgIHNlYXJjaElucHV0ID0gX3RoaXMkcHJvcHMxMy5zZWFyY2hJbnB1dDtcbiAgICAgIHZhciBzZWFyY2hRdWVyeSA9IF90aGlzLnN0YXRlLnNlYXJjaFF1ZXJ5O1xuXG5cbiAgICAgIGlmICghc2VhcmNoKSByZXR1cm4gbnVsbDtcbiAgICAgIHJldHVybiBEcm9wZG93blNlYXJjaElucHV0LmNyZWF0ZShzZWFyY2hJbnB1dCwgeyBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgICBpbnB1dFJlZjogX3RoaXMuaGFuZGxlU2VhcmNoUmVmLFxuICAgICAgICAgIG9uQ2hhbmdlOiBfdGhpcy5oYW5kbGVTZWFyY2hDaGFuZ2UsXG4gICAgICAgICAgc3R5bGU6IHsgd2lkdGg6IF90aGlzLmNvbXB1dGVTZWFyY2hJbnB1dFdpZHRoKCkgfSxcbiAgICAgICAgICB0YWJJbmRleDogX3RoaXMuY29tcHV0ZVNlYXJjaElucHV0VGFiSW5kZXgoKSxcbiAgICAgICAgICB2YWx1ZTogc2VhcmNoUXVlcnlcbiAgICAgICAgfSB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJTZWFyY2hTaXplciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczE0ID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMxNC5zZWFyY2gsXG4gICAgICAgICAgbXVsdGlwbGUgPSBfdGhpcyRwcm9wczE0Lm11bHRpcGxlO1xuXG5cbiAgICAgIGlmICghKHNlYXJjaCAmJiBtdWx0aXBsZSkpIHJldHVybiBudWxsO1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nLCB7IGNsYXNzTmFtZTogJ3NpemVyJywgcmVmOiBfdGhpcy5oYW5kbGVTaXplclJlZiB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJMYWJlbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMxNSA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIG11bHRpcGxlID0gX3RoaXMkcHJvcHMxNS5tdWx0aXBsZSxcbiAgICAgICAgICByZW5kZXJMYWJlbCA9IF90aGlzJHByb3BzMTUucmVuZGVyTGFiZWw7XG4gICAgICB2YXIgX3RoaXMkc3RhdGU0ID0gX3RoaXMuc3RhdGUsXG4gICAgICAgICAgc2VsZWN0ZWRMYWJlbCA9IF90aGlzJHN0YXRlNC5zZWxlY3RlZExhYmVsLFxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkc3RhdGU0LnZhbHVlO1xuXG4gICAgICBpZiAoIW11bHRpcGxlIHx8IF9pc0VtcHR5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB2YXIgc2VsZWN0ZWRJdGVtcyA9IF9tYXAodmFsdWUsIF90aGlzLmdldEl0ZW1CeVZhbHVlKTtcblxuXG4gICAgICAvLyBpZiBubyBpdGVtIGNvdWxkIGJlIGZvdW5kIGZvciBhIGdpdmVuIHN0YXRlIHZhbHVlIHRoZSBzZWxlY3RlZCBpdGVtIHdpbGwgYmUgdW5kZWZpbmVkXG4gICAgICAvLyBjb21wYWN0IHRoZSBzZWxlY3RlZEl0ZW1zIHNvIHdlIG9ubHkgaGF2ZSBhY3R1YWwgb2JqZWN0cyBsZWZ0XG4gICAgICByZXR1cm4gX21hcChfY29tcGFjdChzZWxlY3RlZEl0ZW1zKSwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgICAgYWN0aXZlOiBpdGVtLnZhbHVlID09PSBzZWxlY3RlZExhYmVsLFxuICAgICAgICAgIGFzOiAnYScsXG4gICAgICAgICAga2V5OiBnZXRLZXlPclZhbHVlKGl0ZW0ua2V5LCBpdGVtLnZhbHVlKSxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVMYWJlbENsaWNrLFxuICAgICAgICAgIG9uUmVtb3ZlOiBfdGhpcy5oYW5kbGVMYWJlbFJlbW92ZSxcbiAgICAgICAgICB2YWx1ZTogaXRlbS52YWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBMYWJlbC5jcmVhdGUocmVuZGVyTGFiZWwoaXRlbSwgaW5kZXgsIGRlZmF1bHRQcm9wcyksIHsgZGVmYXVsdFByb3BzOiBkZWZhdWx0UHJvcHMgfSk7XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTYgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBtdWx0aXBsZSA9IF90aGlzJHByb3BzMTYubXVsdGlwbGUsXG4gICAgICAgICAgc2VhcmNoID0gX3RoaXMkcHJvcHMxNi5zZWFyY2gsXG4gICAgICAgICAgbm9SZXN1bHRzTWVzc2FnZSA9IF90aGlzJHByb3BzMTYubm9SZXN1bHRzTWVzc2FnZTtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZTUgPSBfdGhpcy5zdGF0ZSxcbiAgICAgICAgICBzZWxlY3RlZEluZGV4ID0gX3RoaXMkc3RhdGU1LnNlbGVjdGVkSW5kZXgsXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRzdGF0ZTUudmFsdWU7XG5cbiAgICAgIHZhciBvcHRpb25zID0gX3RoaXMuZ2V0TWVudU9wdGlvbnMoKTtcblxuICAgICAgaWYgKG5vUmVzdWx0c01lc3NhZ2UgIT09IG51bGwgJiYgc2VhcmNoICYmIF9pc0VtcHR5KG9wdGlvbnMpKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAnbWVzc2FnZScgfSxcbiAgICAgICAgICBub1Jlc3VsdHNNZXNzYWdlXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIHZhciBpc0FjdGl2ZSA9IG11bHRpcGxlID8gZnVuY3Rpb24gKG9wdFZhbHVlKSB7XG4gICAgICAgIHJldHVybiBfaW5jbHVkZXModmFsdWUsIG9wdFZhbHVlKTtcbiAgICAgIH0gOiBmdW5jdGlvbiAob3B0VmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG9wdFZhbHVlID09PSB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfbWFwKG9wdGlvbnMsIGZ1bmN0aW9uIChvcHQsIGkpIHtcbiAgICAgICAgcmV0dXJuIERyb3Bkb3duSXRlbS5jcmVhdGUoX2V4dGVuZHMoe1xuICAgICAgICAgIGFjdGl2ZTogaXNBY3RpdmUob3B0LnZhbHVlKSxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXG4gICAgICAgICAgc2VsZWN0ZWQ6IHNlbGVjdGVkSW5kZXggPT09IGlcbiAgICAgICAgfSwgb3B0LCB7XG4gICAgICAgICAga2V5OiBnZXRLZXlPclZhbHVlKG9wdC5rZXksIG9wdC52YWx1ZSksXG4gICAgICAgICAgLy8gTmVlZGVkIGZvciBoYW5kbGluZyBjbGljayBldmVudHMgb24gZGlzYWJsZWQgaXRlbXNcbiAgICAgICAgICBzdHlsZTogX2V4dGVuZHMoe30sIG9wdC5zdHlsZSwgeyBwb2ludGVyRXZlbnRzOiAnYWxsJyB9KVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9LCBfdGhpcy5yZW5kZXJNZW51ID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMTcgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMTcuY2hpbGRyZW4sXG4gICAgICAgICAgZGlyZWN0aW9uID0gX3RoaXMkcHJvcHMxNy5kaXJlY3Rpb24sXG4gICAgICAgICAgaGVhZGVyID0gX3RoaXMkcHJvcHMxNy5oZWFkZXI7XG4gICAgICB2YXIgb3BlbiA9IF90aGlzLnN0YXRlLm9wZW47XG5cbiAgICAgIHZhciBhcmlhT3B0aW9ucyA9IF90aGlzLmdldERyb3Bkb3duTWVudUFyaWFPcHRpb25zKCk7XG5cbiAgICAgIC8vIHNpbmdsZSBtZW51IGNoaWxkXG4gICAgICBpZiAoIWNoaWxkcmVuVXRpbHMuaXNOaWwoY2hpbGRyZW4pKSB7XG4gICAgICAgIHZhciBtZW51Q2hpbGQgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKTtcbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGN4KGRpcmVjdGlvbiwgdXNlS2V5T25seShvcGVuLCAndmlzaWJsZScpLCBtZW51Q2hpbGQucHJvcHMuY2xhc3NOYW1lKTtcblxuICAgICAgICByZXR1cm4gY2xvbmVFbGVtZW50KG1lbnVDaGlsZCwgX2V4dGVuZHMoeyBjbGFzc05hbWU6IGNsYXNzTmFtZSB9LCBhcmlhT3B0aW9ucykpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgRHJvcGRvd25NZW51LFxuICAgICAgICBfZXh0ZW5kcyh7fSwgYXJpYU9wdGlvbnMsIHsgZGlyZWN0aW9uOiBkaXJlY3Rpb24sIG9wZW46IG9wZW4gfSksXG4gICAgICAgIERyb3Bkb3duSGVhZGVyLmNyZWF0ZShoZWFkZXIpLFxuICAgICAgICBfdGhpcy5yZW5kZXJPcHRpb25zKClcbiAgICAgICk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoRHJvcGRvd24sIFt7XG4gICAga2V5OiAnZ2V0SW5pdGlhbEF1dG9Db250cm9sbGVkU3RhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRJbml0aWFsQXV0b0NvbnRyb2xsZWRTdGF0ZSgpIHtcbiAgICAgIHJldHVybiB7IHNlYXJjaFF1ZXJ5OiAnJyB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlLFxuICAgICAgICAgIG9wZW4gPSBfc3RhdGUub3BlbixcbiAgICAgICAgICB2YWx1ZSA9IF9zdGF0ZS52YWx1ZTtcblxuXG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgIHRoaXMuc2V0U2VsZWN0ZWRJbmRleCh2YWx1ZSk7XG5cbiAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB0aGlzLmF0dGFjaEhhbmRsZXJzT25PcGVuKCk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBfZ2V0MihEcm9wZG93bi5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihEcm9wZG93bi5wcm90b3R5cGUpLCAnY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcycsIHRoaXMpLmNhbGwodGhpcywgbmV4dFByb3BzKTtcblxuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAvLyBpbiBkZXZlbG9wbWVudCwgdmFsaWRhdGUgdmFsdWUgdHlwZSBtYXRjaGVzIGRyb3Bkb3duIHR5cGVcbiAgICAgICAgdmFyIGlzTmV4dFZhbHVlQXJyYXkgPSBBcnJheS5pc0FycmF5KG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICAgIHZhciBoYXNWYWx1ZSA9IF9oYXMobmV4dFByb3BzLCAndmFsdWUnKTtcblxuICAgICAgICBpZiAoaGFzVmFsdWUgJiYgbmV4dFByb3BzLm11bHRpcGxlICYmICFpc05leHRWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJvcGRvd24gYHZhbHVlYCBtdXN0IGJlIGFuIGFycmF5IHdoZW4gYG11bHRpcGxlYCBpcyBzZXQuJyArICgnIFJlY2VpdmVkIHR5cGU6IGAnICsgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5leHRQcm9wcy52YWx1ZSkgKyAnYC4nKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFzVmFsdWUgJiYgIW5leHRQcm9wcy5tdWx0aXBsZSAmJiBpc05leHRWYWx1ZUFycmF5KSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRHJvcGRvd24gYHZhbHVlYCBtdXN0IG5vdCBiZSBhbiBhcnJheSB3aGVuIGBtdWx0aXBsZWAgaXMgbm90IHNldC4nICsgJyBFaXRoZXIgc2V0IGBtdWx0aXBsZT17dHJ1ZX1gIG9yIHVzZSBhIHN0cmluZyBvciBudW1iZXIgdmFsdWUuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG4gICAgICBpZiAoIXNoYWxsb3dFcXVhbChuZXh0UHJvcHMudmFsdWUsIHRoaXMucHJvcHMudmFsdWUpKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsdWUobmV4dFByb3BzLnZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KG5leHRQcm9wcy52YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghX2lzRXF1YWwobmV4dFByb3BzLm9wdGlvbnMsIHRoaXMucHJvcHMub3B0aW9ucykpIHtcbiAgICAgICAgdGhpcy5zZXRTZWxlY3RlZEluZGV4KHVuZGVmaW5lZCwgbmV4dFByb3BzLm9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgICAgcmV0dXJuICFzaGFsbG93RXF1YWwobmV4dFByb3BzLCB0aGlzLnByb3BzKSB8fCAhc2hhbGxvd0VxdWFsKG5leHRTdGF0ZSwgdGhpcy5zdGF0ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50RGlkVXBkYXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG5cbiAgICAgIC8vIGZvY3VzZWQgLyBibHVycmVkXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNvbXBsZXhpdHlcbiAgICAgIGlmICghcHJldlN0YXRlLmZvY3VzICYmIHRoaXMuc3RhdGUuZm9jdXMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgIG1pbkNoYXJhY3RlcnMgPSBfcHJvcHMubWluQ2hhcmFjdGVycyxcbiAgICAgICAgICAgICAgb3Blbk9uRm9jdXMgPSBfcHJvcHMub3Blbk9uRm9jdXMsXG4gICAgICAgICAgICAgIHNlYXJjaCA9IF9wcm9wcy5zZWFyY2g7XG5cbiAgICAgICAgICB2YXIgb3BlbmFibGUgPSAhc2VhcmNoIHx8IHNlYXJjaCAmJiBtaW5DaGFyYWN0ZXJzID09PSAxO1xuXG4gICAgICAgICAgaWYgKG9wZW5PbkZvY3VzICYmIG9wZW5hYmxlKSB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc3RhdGUub3Blbikge1xuICAgICAgICAgIGV2ZW50U3RhY2suc3ViKCdrZXlkb3duJywgW3RoaXMub3Blbk9uQXJyb3csIHRoaXMub3Blbk9uU3BhY2VdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBldmVudFN0YWNrLnN1Yigna2V5ZG93bicsIFt0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24sIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXJdKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudFN0YWNrLnN1Yigna2V5ZG93bicsIHRoaXMucmVtb3ZlSXRlbU9uQmFja3NwYWNlKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldlN0YXRlLmZvY3VzICYmICF0aGlzLnN0YXRlLmZvY3VzKSB7XG4gICAgICAgIHZhciBjbG9zZU9uQmx1ciA9IHRoaXMucHJvcHMuY2xvc2VPbkJsdXI7XG5cbiAgICAgICAgaWYgKCF0aGlzLmlzTW91c2VEb3duICYmIGNsb3NlT25CbHVyKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50U3RhY2sudW5zdWIoJ2tleWRvd24nLCBbdGhpcy5vcGVuT25BcnJvdywgdGhpcy5vcGVuT25TcGFjZSwgdGhpcy5tb3ZlU2VsZWN0aW9uT25LZXlEb3duLCB0aGlzLnNlbGVjdEl0ZW1PbkVudGVyLCB0aGlzLnJlbW92ZUl0ZW1PbkJhY2tzcGFjZV0pO1xuICAgICAgfVxuXG4gICAgICAvLyBvcGVuZWQgLyBjbG9zZWRcbiAgICAgIGlmICghcHJldlN0YXRlLm9wZW4gJiYgdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHRoaXMuYXR0YWNoSGFuZGxlcnNPbk9wZW4oKTtcbiAgICAgICAgdGhpcy5zY3JvbGxTZWxlY3RlZEl0ZW1JbnRvVmlldygpO1xuICAgICAgfSBlbHNlIGlmIChwcmV2U3RhdGUub3BlbiAmJiAhdGhpcy5zdGF0ZS5vcGVuKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xvc2UoKTtcbiAgICAgICAgZXZlbnRTdGFjay51bnN1Yigna2V5ZG93bicsIFt0aGlzLmNsb3NlT25Fc2NhcGUsIHRoaXMubW92ZVNlbGVjdGlvbk9uS2V5RG93biwgdGhpcy5zZWxlY3RJdGVtT25FbnRlcl0pO1xuICAgICAgICBldmVudFN0YWNrLnVuc3ViKCdjbGljaycsIHRoaXMuY2xvc2VPbkRvY3VtZW50Q2xpY2spO1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZm9jdXMpIHtcbiAgICAgICAgICBldmVudFN0YWNrLnVuc3ViKCdrZXlkb3duJywgdGhpcy5yZW1vdmVJdGVtT25CYWNrc3BhY2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuICAgICAgZXZlbnRTdGFjay51bnN1Yigna2V5ZG93bicsIFt0aGlzLm9wZW5PbkFycm93LCB0aGlzLm9wZW5PblNwYWNlLCB0aGlzLm1vdmVTZWxlY3Rpb25PbktleURvd24sIHRoaXMuc2VsZWN0SXRlbU9uRW50ZXIsIHRoaXMucmVtb3ZlSXRlbU9uQmFja3NwYWNlLCB0aGlzLmNsb3NlT25Fc2NhcGVdKTtcbiAgICAgIGV2ZW50U3RhY2sudW5zdWIoJ2NsaWNrJywgdGhpcy5jbG9zZU9uRG9jdW1lbnRDbGljayk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIERvY3VtZW50IEV2ZW50IEhhbmRsZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gb25DaGFuZ2UgbmVlZHMgdG8gcmVjZWl2ZSBhIHZhbHVlXG4gICAgLy8gY2FuJ3QgcmVseSBvbiBwcm9wcy52YWx1ZSBpZiB3ZSBhcmUgY29udHJvbGxlZFxuXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gQ29tcG9uZW50IEV2ZW50IEhhbmRsZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEdldHRlcnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyBUaGVyZSBhcmUgdGltZXMgd2hlbiB3ZSBuZWVkIHRvIGNhbGN1bGF0ZSB0aGUgb3B0aW9ucyBiYXNlZCBvbiBhIHZhbHVlXG4gICAgLy8gdGhhdCBoYXNuJ3QgeWV0IGJlZW4gcGVyc2lzdGVkIHRvIHN0YXRlLlxuXG4gIH0sIHtcbiAgICBrZXk6ICdnZXREcm9wZG93bk1lbnVBcmlhT3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldERyb3Bkb3duTWVudUFyaWFPcHRpb25zKCkge1xuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHNlYXJjaCA9IF9wcm9wczIuc2VhcmNoLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzMi5tdWx0aXBsZTtcblxuICAgICAgdmFyIGFyaWFPcHRpb25zID0ge307XG5cbiAgICAgIGlmIChzZWFyY2gpIHtcbiAgICAgICAgYXJpYU9wdGlvbnNbJ2FyaWEtbXVsdGlzZWxlY3RhYmxlJ10gPSBtdWx0aXBsZTtcbiAgICAgICAgYXJpYU9wdGlvbnMucm9sZSA9ICdsaXN0Ym94JztcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmlhT3B0aW9ucztcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU2V0dGVyc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBPdmVycmlkZXNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gUmVmc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBIZWxwZXJzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIEJlaGF2aW9yXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFJlbmRlclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGJhc2ljID0gX3Byb3BzMy5iYXNpYyxcbiAgICAgICAgICBidXR0b24gPSBfcHJvcHMzLmJ1dHRvbixcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjb21wYWN0ID0gX3Byb3BzMy5jb21wYWN0LFxuICAgICAgICAgIGRpc2FibGVkID0gX3Byb3BzMy5kaXNhYmxlZCxcbiAgICAgICAgICBlcnJvciA9IF9wcm9wczMuZXJyb3IsXG4gICAgICAgICAgZmx1aWQgPSBfcHJvcHMzLmZsdWlkLFxuICAgICAgICAgIGZsb2F0aW5nID0gX3Byb3BzMy5mbG9hdGluZyxcbiAgICAgICAgICBpY29uID0gX3Byb3BzMy5pY29uLFxuICAgICAgICAgIGlubGluZSA9IF9wcm9wczMuaW5saW5lLFxuICAgICAgICAgIGl0ZW0gPSBfcHJvcHMzLml0ZW0sXG4gICAgICAgICAgbGFiZWxlZCA9IF9wcm9wczMubGFiZWxlZCxcbiAgICAgICAgICBsb2FkaW5nID0gX3Byb3BzMy5sb2FkaW5nLFxuICAgICAgICAgIG11bHRpcGxlID0gX3Byb3BzMy5tdWx0aXBsZSxcbiAgICAgICAgICBwb2ludGluZyA9IF9wcm9wczMucG9pbnRpbmcsXG4gICAgICAgICAgc2VhcmNoID0gX3Byb3BzMy5zZWFyY2gsXG4gICAgICAgICAgc2VsZWN0aW9uID0gX3Byb3BzMy5zZWxlY3Rpb24sXG4gICAgICAgICAgc2Nyb2xsaW5nID0gX3Byb3BzMy5zY3JvbGxpbmcsXG4gICAgICAgICAgc2ltcGxlID0gX3Byb3BzMy5zaW1wbGUsXG4gICAgICAgICAgdHJpZ2dlciA9IF9wcm9wczMudHJpZ2dlcixcbiAgICAgICAgICB1cHdhcmQgPSBfcHJvcHMzLnVwd2FyZDtcbiAgICAgIHZhciBvcGVuID0gdGhpcy5zdGF0ZS5vcGVuO1xuXG4gICAgICAvLyBDbGFzc2VzXG5cbiAgICAgIHZhciBjbGFzc2VzID0gY3goJ3VpJywgdXNlS2V5T25seShvcGVuLCAnYWN0aXZlIHZpc2libGUnKSwgdXNlS2V5T25seShkaXNhYmxlZCwgJ2Rpc2FibGVkJyksIHVzZUtleU9ubHkoZXJyb3IsICdlcnJvcicpLCB1c2VLZXlPbmx5KGxvYWRpbmcsICdsb2FkaW5nJyksIHVzZUtleU9ubHkoYmFzaWMsICdiYXNpYycpLCB1c2VLZXlPbmx5KGJ1dHRvbiwgJ2J1dHRvbicpLCB1c2VLZXlPbmx5KGNvbXBhY3QsICdjb21wYWN0JyksIHVzZUtleU9ubHkoZmx1aWQsICdmbHVpZCcpLCB1c2VLZXlPbmx5KGZsb2F0aW5nLCAnZmxvYXRpbmcnKSwgdXNlS2V5T25seShpbmxpbmUsICdpbmxpbmUnKSxcbiAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGF1Z21lbnRhdGlvbiB0byByZW5kZXIgRHJvcGRvd25zIGFzIEJ1dHRvbi9NZW51LCBzb2x2ZXMgaWNvbi9saW5rIGl0ZW0gaXNzdWVzXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vU2VtYW50aWMtT3JnL1NlbWFudGljLVVJLVJlYWN0L2lzc3Vlcy80MDEjaXNzdWVjb21tZW50LTI0MDQ4NzIyOVxuICAgICAgLy8gVE9ETzogdGhlIGljb24gY2xhc3MgaXMgb25seSByZXF1aXJlZCB3aGVuIGEgZHJvcGRvd24gaXMgYSBidXR0b25cbiAgICAgIC8vIHVzZUtleU9ubHkoaWNvbiwgJ2ljb24nKSxcbiAgICAgIHVzZUtleU9ubHkobGFiZWxlZCwgJ2xhYmVsZWQnKSwgdXNlS2V5T25seShpdGVtLCAnaXRlbScpLCB1c2VLZXlPbmx5KG11bHRpcGxlLCAnbXVsdGlwbGUnKSwgdXNlS2V5T25seShzZWFyY2gsICdzZWFyY2gnKSwgdXNlS2V5T25seShzZWxlY3Rpb24sICdzZWxlY3Rpb24nKSwgdXNlS2V5T25seShzaW1wbGUsICdzaW1wbGUnKSwgdXNlS2V5T25seShzY3JvbGxpbmcsICdzY3JvbGxpbmcnKSwgdXNlS2V5T25seSh1cHdhcmQsICd1cHdhcmQnKSwgdXNlS2V5T3JWYWx1ZUFuZEtleShwb2ludGluZywgJ3BvaW50aW5nJyksICdkcm9wZG93bicsIGNsYXNzTmFtZSk7XG4gICAgICB2YXIgcmVzdCA9IGdldFVuaGFuZGxlZFByb3BzKERyb3Bkb3duLCB0aGlzLnByb3BzKTtcbiAgICAgIHZhciBFbGVtZW50VHlwZSA9IGdldEVsZW1lbnRUeXBlKERyb3Bkb3duLCB0aGlzLnByb3BzKTtcbiAgICAgIHZhciBhcmlhT3B0aW9ucyA9IHRoaXMuZ2V0RHJvcGRvd25BcmlhT3B0aW9ucyhFbGVtZW50VHlwZSwgdGhpcy5wcm9wcyk7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBFbGVtZW50VHlwZSxcbiAgICAgICAgX2V4dGVuZHMoe30sIHJlc3QsIGFyaWFPcHRpb25zLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLFxuICAgICAgICAgIG9uQmx1cjogdGhpcy5oYW5kbGVCbHVyLFxuICAgICAgICAgIG9uQ2xpY2s6IHRoaXMuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgb25Nb3VzZURvd246IHRoaXMuaGFuZGxlTW91c2VEb3duLFxuICAgICAgICAgIG9uRm9jdXM6IHRoaXMuaGFuZGxlRm9jdXMsXG4gICAgICAgICAgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICAgIHRhYkluZGV4OiB0aGlzLmNvbXB1dGVUYWJJbmRleCgpLFxuICAgICAgICAgIHJlZjogdGhpcy5oYW5kbGVSZWZcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucmVuZGVyTGFiZWxzKCksXG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoSW5wdXQoKSxcbiAgICAgICAgdGhpcy5yZW5kZXJTZWFyY2hTaXplcigpLFxuICAgICAgICB0cmlnZ2VyIHx8IHRoaXMucmVuZGVyVGV4dCgpLFxuICAgICAgICBJY29uLmNyZWF0ZShpY29uLCB7XG4gICAgICAgICAgb3ZlcnJpZGVQcm9wczogdGhpcy5oYW5kbGVJY29uT3ZlcnJpZGVzXG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnJlbmRlck1lbnUoKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRHJvcGRvd247XG59KENvbXBvbmVudCk7XG5cbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWRkaXRpb25MYWJlbDogJ0FkZCAnLFxuICBhZGRpdGlvblBvc2l0aW9uOiAndG9wJyxcbiAgY2xvc2VPbkJsdXI6IHRydWUsXG4gIGRlYnVycjogZmFsc2UsXG4gIGljb246ICdkcm9wZG93bicsXG4gIG1pbkNoYXJhY3RlcnM6IDEsXG4gIG5vUmVzdWx0c01lc3NhZ2U6ICdObyByZXN1bHRzIGZvdW5kLicsXG4gIG9wZW5PbkZvY3VzOiB0cnVlLFxuICByZW5kZXJMYWJlbDogZnVuY3Rpb24gcmVuZGVyTGFiZWwoX3JlZjMpIHtcbiAgICB2YXIgdGV4dCA9IF9yZWYzLnRleHQ7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH0sXG4gIHNlYXJjaElucHV0OiAndGV4dCcsXG4gIHNlbGVjdE9uQmx1cjogdHJ1ZSxcbiAgc2VsZWN0T25OYXZpZ2F0aW9uOiB0cnVlLFxuICB3cmFwU2VsZWN0aW9uOiB0cnVlXG59O1xuRHJvcGRvd24uYXV0b0NvbnRyb2xsZWRQcm9wcyA9IFsnb3BlbicsICdzZWFyY2hRdWVyeScsICdzZWxlY3RlZExhYmVsJywgJ3ZhbHVlJ107XG5Ecm9wZG93bi5fbWV0YSA9IHtcbiAgbmFtZTogJ0Ryb3Bkb3duJyxcbiAgdHlwZTogTUVUQS5UWVBFUy5NT0RVTEVcbn07XG5Ecm9wZG93bi5EaXZpZGVyID0gRHJvcGRvd25EaXZpZGVyO1xuRHJvcGRvd24uSGVhZGVyID0gRHJvcGRvd25IZWFkZXI7XG5Ecm9wZG93bi5JdGVtID0gRHJvcGRvd25JdGVtO1xuRHJvcGRvd24uTWVudSA9IERyb3Bkb3duTWVudTtcbkRyb3Bkb3duLlNlYXJjaElucHV0ID0gRHJvcGRvd25TZWFyY2hJbnB1dDtcbkRyb3Bkb3duLmhhbmRsZWRQcm9wcyA9IFsnYWRkaXRpb25MYWJlbCcsICdhZGRpdGlvblBvc2l0aW9uJywgJ2FsbG93QWRkaXRpb25zJywgJ2FzJywgJ2Jhc2ljJywgJ2J1dHRvbicsICdjaGlsZHJlbicsICdjbGFzc05hbWUnLCAnY2xvc2VPbkJsdXInLCAnY2xvc2VPbkNoYW5nZScsICdjb21wYWN0JywgJ2RlYnVycicsICdkZWZhdWx0T3BlbicsICdkZWZhdWx0U2VhcmNoUXVlcnknLCAnZGVmYXVsdFNlbGVjdGVkTGFiZWwnLCAnZGVmYXVsdFZhbHVlJywgJ2RpcmVjdGlvbicsICdkaXNhYmxlZCcsICdlcnJvcicsICdmbG9hdGluZycsICdmbHVpZCcsICdoZWFkZXInLCAnaWNvbicsICdpbmxpbmUnLCAnaXRlbScsICdsYWJlbGVkJywgJ2xvYWRpbmcnLCAnbWluQ2hhcmFjdGVycycsICdtdWx0aXBsZScsICdub1Jlc3VsdHNNZXNzYWdlJywgJ29uQWRkSXRlbScsICdvbkJsdXInLCAnb25DaGFuZ2UnLCAnb25DbGljaycsICdvbkNsb3NlJywgJ29uRm9jdXMnLCAnb25MYWJlbENsaWNrJywgJ29uTW91c2VEb3duJywgJ29uT3BlbicsICdvblNlYXJjaENoYW5nZScsICdvcGVuJywgJ29wZW5PbkZvY3VzJywgJ29wdGlvbnMnLCAncGxhY2Vob2xkZXInLCAncG9pbnRpbmcnLCAncmVuZGVyTGFiZWwnLCAnc2Nyb2xsaW5nJywgJ3NlYXJjaCcsICdzZWFyY2hJbnB1dCcsICdzZWFyY2hRdWVyeScsICdzZWxlY3RPbkJsdXInLCAnc2VsZWN0T25OYXZpZ2F0aW9uJywgJ3NlbGVjdGVkTGFiZWwnLCAnc2VsZWN0aW9uJywgJ3NpbXBsZScsICd0YWJJbmRleCcsICd0ZXh0JywgJ3RyaWdnZXInLCAndXB3YXJkJywgJ3ZhbHVlJywgJ3dyYXBTZWxlY3Rpb24nXTtcbmV4cG9ydCBkZWZhdWx0IERyb3Bkb3duO1xuRHJvcGRvd24ucHJvcFR5cGVzID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8ge1xuICAvKiogQW4gZWxlbWVudCB0eXBlIHRvIHJlbmRlciBhcyAoc3RyaW5nIG9yIGZ1bmN0aW9uKS4gKi9cbiAgYXM6IGN1c3RvbVByb3BUeXBlcy5hcyxcblxuICAvKiogTGFiZWwgcHJlZml4ZWQgdG8gYW4gb3B0aW9uIGFkZGVkIGJ5IGEgdXNlci4gKi9cbiAgYWRkaXRpb25MYWJlbDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmVsZW1lbnQsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKiogUG9zaXRpb24gb2YgdGhlIGBBZGQ6IC4uLmAgb3B0aW9uIGluIHRoZSBkcm9wZG93biBsaXN0ICgndG9wJyBvciAnYm90dG9tJykuICovXG4gIGFkZGl0aW9uUG9zaXRpb246IFByb3BUeXBlcy5vbmVPZihbJ3RvcCcsICdib3R0b20nXSksXG5cbiAgLyoqXG4gICAqIEFsbG93IHVzZXIgYWRkaXRpb25zIHRvIHRoZSBsaXN0IG9mIG9wdGlvbnMgKGJvb2xlYW4pLlxuICAgKiBSZXF1aXJlcyB0aGUgdXNlIG9mIGBzZWxlY3Rpb25gLCBgb3B0aW9uc2AgYW5kIGBzZWFyY2hgLlxuICAgKi9cbiAgYWxsb3dBZGRpdGlvbnM6IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRlbWFuZChbJ29wdGlvbnMnLCAnc2VsZWN0aW9uJywgJ3NlYXJjaCddKSwgUHJvcFR5cGVzLmJvb2xdKSxcblxuICAvKiogQSBEcm9wZG93biBjYW4gcmVkdWNlIGl0cyBjb21wbGV4aXR5LiAqL1xuICBiYXNpYzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEZvcm1hdCB0aGUgRHJvcGRvd24gdG8gYXBwZWFyIGFzIGEgYnV0dG9uLiAqL1xuICBidXR0b246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBQcmltYXJ5IGNvbnRlbnQuICovXG4gIGNoaWxkcmVuOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kaXNhbGxvdyhbJ29wdGlvbnMnLCAnc2VsZWN0aW9uJ10pLCBjdXN0b21Qcm9wVHlwZXMuZ2l2ZW5Qcm9wcyh7IGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LmlzUmVxdWlyZWQgfSwgUHJvcFR5cGVzLmVsZW1lbnQuaXNSZXF1aXJlZCldKSxcblxuICAvKiogQWRkaXRpb25hbCBjbGFzc2VzLiAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHNob3VsZCBjbG9zZSB3aGVuIHRoZSBkcm9wZG93biBpcyBibHVycmVkLiAqL1xuICBjbG9zZU9uQmx1cjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHNob3VsZCBjbG9zZSB3aGVuIGEgdmFsdWUgaXMgc2VsZWN0ZWQgZnJvbSB0aGUgZHJvcGRvd24uXG4gICAqIEJ5IGRlZmF1bHQsIG11bHRpcGxlIHNlbGVjdGlvbiBkcm9wZG93bnMgd2lsbCByZW1haW4gb3BlbiBvbiBjaGFuZ2UsIHdoaWxlIHNpbmdsZVxuICAgKiBzZWxlY3Rpb24gZHJvcGRvd25zIHdpbGwgY2xvc2Ugb24gY2hhbmdlLlxuICAgKi9cbiAgY2xvc2VPbkNoYW5nZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgY29tcGFjdCBkcm9wZG93biBoYXMgbm8gbWluaW11bSB3aWR0aC4gKi9cbiAgY29tcGFjdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFdoZXRoZXIgb3Igbm90IHRoZSBkcm9wZG93biBzaG91bGQgc3RyaXAgZGlhY3JpdGljcyBpbiBvcHRpb25zIGFuZCBpbnB1dCBzZWFyY2ggKi9cbiAgZGVidXJyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogSW5pdGlhbCB2YWx1ZSBvZiBvcGVuLiAqL1xuICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEluaXRpYWwgdmFsdWUgb2Ygc2VhcmNoUXVlcnkuICovXG4gIGRlZmF1bHRTZWFyY2hRdWVyeTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKiogQ3VycmVudGx5IHNlbGVjdGVkIGxhYmVsIGluIG11bHRpLXNlbGVjdC4gKi9cbiAgZGVmYXVsdFNlbGVjdGVkTGFiZWw6IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRlbWFuZChbJ211bHRpcGxlJ10pLCBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nXSldKSxcblxuICAvKiogSW5pdGlhbCB2YWx1ZSBvciB2YWx1ZSBhcnJheSBpZiBtdWx0aXBsZS4gKi9cbiAgZGVmYXVsdFZhbHVlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyXSkpXSksXG5cbiAgLyoqIEEgZHJvcGRvd24gbWVudSBjYW4gb3BlbiB0byB0aGUgbGVmdCBvciB0byB0aGUgcmlnaHQuICovXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnbGVmdCcsICdyaWdodCddKSxcblxuICAvKiogQSBkaXNhYmxlZCBkcm9wZG93biBtZW51IG9yIGl0ZW0gZG9lcyBub3QgYWxsb3cgdXNlciBpbnRlcmFjdGlvbi4gKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBbiBlcnJvcmVkIGRyb3Bkb3duIGNhbiBhbGVydCBhIHVzZXIgdG8gYSBwcm9ibGVtLiAqL1xuICBlcnJvcjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gbWVudSBjYW4gY29udGFpbiBmbG9hdGVkIGNvbnRlbnQuICovXG4gIGZsb2F0aW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkcm9wZG93biBjYW4gdGFrZSB0aGUgZnVsbCB3aWR0aCBvZiBpdHMgcGFyZW50ICovXG4gIGZsdWlkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkcm9wZG93biBtZW51IGNhbiBjb250YWluIGEgaGVhZGVyLiAqL1xuICBoZWFkZXI6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKiBTaG9ydGhhbmQgZm9yIEljb24uICovXG4gIGljb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIGJlIGZvcm1hdHRlZCB0byBhcHBlYXIgaW5saW5lIGluIG90aGVyIGNvbnRlbnQuICovXG4gIGlubGluZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIGJlIGZvcm1hdHRlZCBhcyBhIE1lbnUgaXRlbS4gKi9cbiAgaXRlbTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIGJlIGxhYmVsZWQuICovXG4gIGxhYmVsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBzaG93IHRoYXQgaXQgaXMgY3VycmVudGx5IGxvYWRpbmcgZGF0YS4gKi9cbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqIFRoZSBtaW5pbXVtIGNoYXJhY3RlcnMgZm9yIGEgc2VhcmNoIHRvIGJlZ2luIHNob3dpbmcgcmVzdWx0cy4gKi9cbiAgbWluQ2hhcmFjdGVyczogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKiogQSBzZWxlY3Rpb24gZHJvcGRvd24gY2FuIGFsbG93IG11bHRpcGxlIHNlbGVjdGlvbnMuICovXG4gIG11bHRpcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogTWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIHJlc3VsdHMuICovXG4gIG5vUmVzdWx0c01lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgdXNlciBhZGRzIGEgbmV3IGl0ZW0uIFVzZSB0aGlzIHRvIHVwZGF0ZSB0aGUgb3B0aW9ucyBsaXN0LlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzIGFuZCB0aGUgbmV3IGl0ZW0ncyB2YWx1ZS5cbiAgICovXG4gIG9uQWRkSXRlbTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBibHVyLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25CbHVyOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgYXR0ZW1wdHMgdG8gY2hhbmdlIHRoZSB2YWx1ZS5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcyBhbmQgcHJvcG9zZWQgdmFsdWUuXG4gICAqL1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCBvbiBjbGljay5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcy5cbiAgICovXG4gIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhIGNsb3NlIGV2ZW50IGhhcHBlbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQ2FsbGVkIG9uIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIGEgbXVsdGktc2VsZWN0IGxhYmVsIGlzIGNsaWNrZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgbGFiZWwgcHJvcHMuXG4gICAqL1xuICBvbkxhYmVsQ2xpY2s6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gbW91c2Vkb3duLlxuICAgKlxuICAgKiBAcGFyYW0ge1N5bnRoZXRpY0V2ZW50fSBldmVudCAtIFJlYWN0J3Mgb3JpZ2luYWwgU3ludGhldGljRXZlbnQuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gQWxsIHByb3BzLlxuICAgKi9cbiAgb25Nb3VzZURvd246IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiBhbiBvcGVuIGV2ZW50IGhhcHBlbnMuXG4gICAqXG4gICAqIEBwYXJhbSB7U3ludGhldGljRXZlbnR9IGV2ZW50IC0gUmVhY3QncyBvcmlnaW5hbCBTeW50aGV0aWNFdmVudC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRhdGEgLSBBbGwgcHJvcHMuXG4gICAqL1xuICBvbk9wZW46IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gc2VhcmNoIGlucHV0IGNoYW5nZS5cbiAgICpcbiAgICogQHBhcmFtIHtTeW50aGV0aWNFdmVudH0gZXZlbnQgLSBSZWFjdCdzIG9yaWdpbmFsIFN5bnRoZXRpY0V2ZW50LlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIEFsbCBwcm9wcywgaW5jbHVkZXMgY3VycmVudCB2YWx1ZSBvZiBzZWFyY2hRdWVyeS5cbiAgICovXG4gIG9uU2VhcmNoQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKiogQ29udHJvbHMgd2hldGhlciBvciBub3QgdGhlIGRyb3Bkb3duIG1lbnUgaXMgZGlzcGxheWVkLiAqL1xuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogV2hldGhlciBvciBub3QgdGhlIG1lbnUgc2hvdWxkIG9wZW4gd2hlbiB0aGUgZHJvcGRvd24gaXMgZm9jdXNlZC4gKi9cbiAgb3Blbk9uRm9jdXM6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBBcnJheSBvZiBEcm9wZG93bi5JdGVtIHByb3BzIGUuZy4gYHsgdGV4dDogJycsIHZhbHVlOiAnJyB9YCAqL1xuICBvcHRpb25zOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kaXNhbGxvdyhbJ2NoaWxkcmVuJ10pLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoRHJvcGRvd25JdGVtLnByb3BUeXBlcykpXSksXG5cbiAgLyoqIFBsYWNlaG9sZGVyIHRleHQuICovXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBiZSBmb3JtYXR0ZWQgc28gdGhhdCBpdHMgbWVudSBpcyBwb2ludGluZy4gKi9cbiAgcG9pbnRpbmc6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMub25lT2YoWydsZWZ0JywgJ3JpZ2h0JywgJ3RvcCcsICd0b3AgbGVmdCcsICd0b3AgcmlnaHQnLCAnYm90dG9tJywgJ2JvdHRvbSBsZWZ0JywgJ2JvdHRvbSByaWdodCddKV0pLFxuXG4gIC8qKlxuICAgKiBNYXBwZWQgb3ZlciB0aGUgYWN0aXZlIGl0ZW1zIGFuZCByZXR1cm5zIHNob3J0aGFuZCBmb3IgdGhlIGFjdGl2ZSBpdGVtIExhYmVscy5cbiAgICogT25seSBhcHBsaWVzIHRvIGBtdWx0aXBsZWAgRHJvcGRvd25zLlxuICAgKlxuICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSAtIEEgY3VycmVudGx5IGFjdGl2ZSBkcm9wZG93biBpdGVtLlxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSBUaGUgY3VycmVudCBpbmRleC5cbiAgICogQHBhcmFtIHtvYmplY3R9IGRlZmF1bHRMYWJlbFByb3BzIC0gVGhlIGRlZmF1bHQgcHJvcHMgZm9yIGFuIGFjdGl2ZSBpdGVtIExhYmVsLlxuICAgKiBAcmV0dXJucyB7Kn0gU2hvcnRoYW5kIGZvciBhIExhYmVsLlxuICAgKi9cbiAgcmVuZGVyTGFiZWw6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBoYXZlIGl0cyBtZW51IHNjcm9sbC4gKi9cbiAgc2Nyb2xsaW5nOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBzZWxlY3Rpb24gZHJvcGRvd24gY2FuIGFsbG93IGEgdXNlciB0byBzZWFyY2ggdGhyb3VnaCBhIGxhcmdlIGxpc3Qgb2YgY2hvaWNlcy5cbiAgICogUGFzcyBhIGZ1bmN0aW9uIGhlcmUgdG8gcmVwbGFjZSB0aGUgZGVmYXVsdCBzZWFyY2guXG4gICAqL1xuICBzZWFyY2g6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuZnVuY10pLFxuXG4gIC8qKiBBIHNob3J0aGFuZCBmb3IgYSBzZWFyY2ggaW5wdXQuICovXG4gIHNlYXJjaElucHV0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYXJyYXksIFByb3BUeXBlcy5ub2RlLCBQcm9wVHlwZXMub2JqZWN0XSksXG5cbiAgLyoqIEN1cnJlbnQgdmFsdWUgb2Ygc2VhcmNoUXVlcnkuIENyZWF0ZXMgYSBjb250cm9sbGVkIGNvbXBvbmVudC4gKi9cbiAgc2VhcmNoUXVlcnk6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLy8gVE9ETyAnc2VhcmNoSW5NZW51JyBvciAnc2VhcmNoPSdpbiBtZW51JyBvciA/Pz8gIEhvdyB0byBoYW5kbGUgdGhpcyBtYXJrdXAgYW5kIGZ1bmN0aW9uYWxpdHk/XG5cbiAgLyoqIERlZmluZSB3aGV0aGVyIHRoZSBoaWdobGlnaHRlZCBpdGVtIHNob3VsZCBiZSBzZWxlY3RlZCBvbiBibHVyLiAqL1xuICBzZWxlY3RPbkJsdXI6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIG9yIG5vdCB0byBjaGFuZ2UgdGhlIHZhbHVlIHdoZW4gbmF2aWdhdGluZyB0aGUgbWVudSB1c2luZyBhcnJvdyBrZXlzLlxuICAgKiBTZXR0aW5nIHRvIGZhbHNlIHdpbGwgcmVxdWlyZSBlbnRlciBvciBsZWZ0IGNsaWNrIHRvIGNvbmZpcm0gYSBjaG9pY2UuXG4gICAqL1xuICBzZWxlY3RPbk5hdmlnYXRpb246IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKiBDdXJyZW50bHkgc2VsZWN0ZWQgbGFiZWwgaW4gbXVsdGktc2VsZWN0LiAqL1xuICBzZWxlY3RlZExhYmVsOiBjdXN0b21Qcm9wVHlwZXMuZXZlcnkoW2N1c3RvbVByb3BUeXBlcy5kZW1hbmQoWydtdWx0aXBsZSddKSwgUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pXSksXG5cbiAgLyoqIEEgZHJvcGRvd24gY2FuIGJlIHVzZWQgdG8gc2VsZWN0IGJldHdlZW4gY2hvaWNlcyBpbiBhIGZvcm0uICovXG4gIHNlbGVjdGlvbjogY3VzdG9tUHJvcFR5cGVzLmV2ZXJ5KFtjdXN0b21Qcm9wVHlwZXMuZGlzYWxsb3coWydjaGlsZHJlbiddKSwgY3VzdG9tUHJvcFR5cGVzLmRlbWFuZChbJ29wdGlvbnMnXSksIFByb3BUeXBlcy5ib29sXSksXG5cbiAgLyoqIEEgc2ltcGxlIGRyb3Bkb3duIGNhbiBvcGVuIHdpdGhvdXQgSmF2YXNjcmlwdC4gKi9cbiAgc2ltcGxlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKiogQSBkcm9wZG93biBjYW4gcmVjZWl2ZSBmb2N1cy4gKi9cbiAgdGFiSW5kZXg6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zdHJpbmddKSxcblxuICAvKiogVGhlIHRleHQgZGlzcGxheWVkIGluIHRoZSBkcm9wZG93biwgdXN1YWxseSBmb3IgdGhlIGFjdGl2ZSBpdGVtLiAqL1xuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKiBDdXN0b20gZWxlbWVudCB0byB0cmlnZ2VyIHRoZSBtZW51IHRvIGJlY29tZSB2aXNpYmxlLiBUYWtlcyBwbGFjZSBvZiAndGV4dCcuICovXG4gIHRyaWdnZXI6IGN1c3RvbVByb3BUeXBlcy5ldmVyeShbY3VzdG9tUHJvcFR5cGVzLmRpc2FsbG93KFsnc2VsZWN0aW9uJywgJ3RleHQnXSksIFByb3BUeXBlcy5ub2RlXSksXG5cbiAgLyoqIEN1cnJlbnQgdmFsdWUgb3IgdmFsdWUgYXJyYXkgaWYgbXVsdGlwbGUuIENyZWF0ZXMgYSBjb250cm9sbGVkIGNvbXBvbmVudC4gKi9cbiAgdmFsdWU6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5ib29sLCBQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMubnVtYmVyLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuYm9vbCwgUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm51bWJlcl0pKV0pLFxuXG4gIC8qKiBBIGRyb3Bkb3duIGNhbiBvcGVuIHVwd2FyZC4gKi9cbiAgdXB3YXJkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogQSBkcm9wZG93biB3aWxsIGdvIHRvIHRoZSBsYXN0IGVsZW1lbnQgd2hlbiBBcnJvd1VwIGlzIHByZXNzZWQgb24gdGhlIGZpcnN0LFxuICAgKiBvciBnbyB0byB0aGUgZmlyc3Qgd2hlbiBBcnJvd0Rvd24gaXMgcHJlc3NlZCBvbiB0aGUgbGFzdCggYWthIGluZmluaXRlIHNlbGVjdGlvbiApXG4gICAqL1xuICB3cmFwU2VsZWN0aW9uOiBQcm9wVHlwZXMuYm9vbFxufSA6IHt9O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3NlbWFudGljLXVpLXJlYWN0L2Rpc3QvZXMvbW9kdWxlcy9Ecm9wZG93bi9Ecm9wZG93bi5qc1xuLy8gbW9kdWxlIGlkID0gNzkzXG4vLyBtb2R1bGUgY2h1bmtzID0gNiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=