/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const ClassDeclaration = require('./classdeclaration');

/**
 * AssetDeclaration defines the schema (aka model or class) for
 * an Asset. It extends ClassDeclaration which manages a set of
 * fields, a super-type and the specification of an
 * identifying field.
 * @private
 * @extends ClassDeclaration
 * @see See [ClassDeclaration]{@link module:ibm-concerto-common.ClassDeclaration}
 * @class
 * @memberof module:ibm-concerto-common
 */
class AssetDeclaration extends ClassDeclaration {

    /**
     * Create an AssetDeclaration.
     * @param {ModelFile} modelFile the ModelFile for this class
     * @param {Object} ast - The AST created by the parser
     * @throws {InvalidModelException}
     */
    constructor(modelFile, ast) {
        super(modelFile, ast);
    }
}

module.exports = AssetDeclaration;
