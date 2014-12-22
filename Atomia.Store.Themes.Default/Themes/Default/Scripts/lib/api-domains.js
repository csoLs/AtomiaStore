﻿/* jshint -W079 */
var Atomia = Atomia || {};
Atomia._unbound = Atomia._unbound || {};
/* jshint +W079 */

Atomia._unbound.Domains = function (_, request) {
    'use strict';

    function findDomains(searchTerm, callback) {
        var data = {
            'searchQuery.Terms[0].Key': 'domainQuery',
            'searchQuery.Terms[0].Value': searchTerm,
            'productsProviderName': 'domains'
        };

        request({
            resourceId: 'Domains.FindDomains',
            data: data,
            success: function (data) {
                if (callback) {
                    callback(data);
                }
            },
            error: function (data) {
                console.log(data);
            }
        });
    }

    return {
        findDomains: findDomains
    };
};

Atomia.Domains = Atomia._unbound.Domains(_, amplify.request);